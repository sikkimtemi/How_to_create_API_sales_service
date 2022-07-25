import boto3
import datetime
import json
import os
import stripe
import uuid
from chalice import Chalice, CognitoUserPoolAuthorizer, Response

app = Chalice(app_name="fm_mail_create_api_key_pro")

# 環境変数
USER_POOL_ARN = os.environ.get("USER_POOL_ARN")
USER_POOL_NAME = os.environ.get("USER_POOL_NAME")
USER_POOL_ID = os.environ.get("USER_POOL_ID")
DYNAMODB_API_KEY_TABLE = os.environ.get("DYNAMODB_API_KEY_TABLE")
DYNAMODB_CUSTOMER_TABLE = os.environ.get("DYNAMODB_CUSTOMER_TABLE")
DYNAMODB_STRIPE_TABLE = os.environ.get("DYNAMODB_STRIPE_TABLE")
REGION_NAME = os.environ.get("REGION_NAME")
STRIPE_API_KEY = os.environ.get("STRIPE_API_KEY")
CHALICE_DOMAIN = os.environ.get("CHALICE_DOMAIN")
MY_DOMAIN = os.environ.get("MY_DOMAIN")
REST_API_ID = os.environ["REST_API_ID"]
USAGE_PLAN_ID = os.environ["USAGE_PLAN_ID"]

# Stripe初期設定
stripe.api_key = STRIPE_API_KEY

# Cognitoで認証する
authorizer = CognitoUserPoolAuthorizer(USER_POOL_NAME, provider_arns=[USER_POOL_ARN])

# DynamoDBに接続
dynamodb = boto3.resource("dynamodb", region_name=REGION_NAME)
api_key_table = dynamodb.Table(DYNAMODB_API_KEY_TABLE)
customer_table = dynamodb.Table(DYNAMODB_CUSTOMER_TABLE)
stripe_table = dynamodb.Table(DYNAMODB_STRIPE_TABLE)

# API Gatewayの設定用クライアント
apigateway_cli = boto3.client("apigateway")

# Cognitoの設定用クライアント
cognito_cli = boto3.client("cognito-idp")


@app.route("/create-checkout-session/{lookup_key}/{user_name}", cors=True)
def create_checkout_session(lookup_key, user_name):
    # 検索キーから価格を取得する
    prices = stripe.Price.list(lookup_keys=[lookup_key], expand=["data.product"])

    # ワンタイムキーを生成する
    one_time_key = str(uuid.uuid4())

    # Stripeのセッションを作成する（success_urlにワンタイムキーが含まれているのがポイント）
    checkout_session = stripe.checkout.Session.create(
        line_items=[
            {
                "price": prices.data[0].id,
                "quantity": 1,
            },
        ],
        mode="subscription",
        success_url=CHALICE_DOMAIN
        + "/create-api-key/{CHECKOUT_SESSION_ID}/"
        + one_time_key,
        cancel_url=MY_DOMAIN + "/canceled_upgrade",
    )

    # セッションIDとUserNameをDynamoDBに登録する
    dt_now_jst = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))
    with stripe_table.batch_writer() as batch:
        batch.put_item(
            Item={
                "SessionId": checkout_session.id,
                "UserName": user_name,
                "PaidFlag": False,
                "OneTimeKey": one_time_key,
                "CreatedAt": dt_now_jst.strftime("%Y-%m-%d %H:%M:%S"),
                "UpdatedAt": dt_now_jst.strftime("%Y-%m-%d %H:%M:%S"),
            }
        )

    # Stripeに遷移する
    return Response(
        status_code=302, body="", headers={"Location": checkout_session.url}
    )


@app.route("/create-api-key/{session_id}/{one_time_key}", cors=True)
def create_api_key(session_id, one_time_key):
    # チェックアウトセッションの状態を確認
    checkout_session = stripe.checkout.Session.retrieve(session_id)
    payment_status = checkout_session.payment_status

    # 支払い済みでなければキャンセルページに遷移
    cancel_url = MY_DOMAIN + "/canceled_upgrade"
    if payment_status != "paid":
        return Response(status_code=302, body="", headers={"Location": cancel_url})

    # カスタマーIDを取得
    customer_id = checkout_session.customer

    # DynamoDBからセッションIDに紐づく情報を取り出す
    result = stripe_table.get_item(Key={"SessionId": session_id})
    user_name = result["Item"]["UserName"]
    paid_flag = result["Item"]["PaidFlag"]
    one_time_key_dynamo_db = result["Item"]["OneTimeKey"]

    # ワンタイムキーが一致しない場合、もしくはAPIキー発行済みの場合はキャンセルページに遷移
    if one_time_key != one_time_key_dynamo_db or paid_flag:
        return Response(status_code=302, body="", headers={"Location": cancel_url})

    # APIキーを発行
    result = apigateway_cli.create_api_key(
        name="fm_mail_pro_" + user_name,
        enabled=True,
        stageKeys=[{"restApiId": REST_API_ID, "stageName": "api"}],
    )

    # 発行したAPIキーの値とIDを取得
    api_key = result["value"]
    api_key_id = result["id"]

    # APIキーに使用量プランを適用
    apigateway_cli.create_usage_plan_key(
        usagePlanId=USAGE_PLAN_ID, keyId=api_key_id, keyType="API_KEY"
    )

    # DynamoDBにAPIキーを登録
    with api_key_table.batch_writer() as batch:
        batch.put_item(
            Item={
                "UserId": user_name,
                "Type": "PRO",
                "ApiKey": api_key,
                "ApiKeyId": api_key_id,
            }
        )

    # DynamoDBにStripeのカスタマーIDとAPIキーIDを登録
    with customer_table.batch_writer() as batch:
        batch.put_item(
            Item={
                "CustomerId": customer_id,
                "UserId": user_name,
                "ApiKeyId": api_key_id,
            }
        )

    # DynamoDBの支払い済みフラグを更新
    dt_now_jst = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))
    stripe_table.update_item(
        Key={"SessionId": session_id},
        ExpressionAttributeNames={"#PaidFlag": "PaidFlag", "#UpdatedAt": "UpdatedAt"},
        ExpressionAttributeValues={
            ":PaidFlag": True,
            ":UpdatedAt": dt_now_jst.strftime("%Y-%m-%d %H:%M:%S"),
        },
        UpdateExpression="SET #PaidFlag = :PaidFlag, #UpdatedAt = :UpdatedAt",
    )

    # ユーザープールのカスタム属性を更新
    cognito_cli.admin_update_user_attributes(
        UserPoolId=USER_POOL_ID,
        Username=user_name,
        UserAttributes=[
            {"Name": "custom:plan_type", "Value": "PRO"},
            {"Name": "custom:stripe_customer_id", "Value": customer_id},
        ],
    )

    # サンクスページに遷移する
    success_url = MY_DOMAIN + "/thanks_upgrade"

    return Response(status_code=302, body="", headers={"Location": success_url})


@app.route("/create-billing-portal-by-user", authorizer=authorizer, cors=True)
def create_billing_portal_by_user():
    # 認証情報からUserNameを取り出す
    context = app.current_request.context
    user_name = context["authorizer"]["claims"]["cognito:username"]

    # ユーザープールのカスタム属性からStripeのカスタマーIDを取得
    user_info = cognito_cli.admin_get_user(UserPoolId=USER_POOL_ID, Username=user_name)
    user_attributes = user_info["UserAttributes"]
    customer_id = [
        x["Value"] for x in user_attributes if x["Name"] == "custom:stripe_customer_id"
    ][0]

    # 請求ポータルのURLを生成する
    return_url = MY_DOMAIN + "/upgrade"
    portal_session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url=return_url,
    )
    billing_portal_url = portal_session.url
    resp = {
        "status": "OK",
        "billing_portal_url": billing_portal_url,
    }

    # 結果を返す
    return json.dumps(resp, ensure_ascii=False)

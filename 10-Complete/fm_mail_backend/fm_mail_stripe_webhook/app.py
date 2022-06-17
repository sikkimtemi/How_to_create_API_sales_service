import boto3
import os
import stripe
from chalice import Chalice

app = Chalice(app_name="fm_mail_stripe_webhook")

# 環境変数
USER_POOL_ID = os.environ.get("USER_POOL_ID")
DYNAMODB_API_KEY_TABLE = os.environ.get("DYNAMODB_API_KEY_TABLE")
DYNAMODB_CUSTOMER_TABLE = os.environ.get("DYNAMODB_CUSTOMER_TABLE")
REGION_NAME = os.environ.get("REGION_NAME")
STRIPE_ENDPOINT_SECRET = os.environ["STRIPE_ENDPOINT_SECRET"]

# DynamoDBに接続
dynamodb = boto3.resource("dynamodb", region_name=REGION_NAME)
api_key_table = dynamodb.Table(DYNAMODB_API_KEY_TABLE)
customer_table = dynamodb.Table(DYNAMODB_CUSTOMER_TABLE)

# API Gatewayの設定用クライアント
apigateway_cli = boto3.client("apigateway")

# Cognitoの設定用クライアント
cognito_cli = boto3.client("cognito-idp")


@app.route("/webhook", methods=["POST"])
def webhook():
    event = None
    # リクエストパラメータの解析
    payload = app.current_request.raw_body
    sig_header = app.current_request.headers["stripe-signature"]

    try:
        # イベントの解析
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_ENDPOINT_SECRET
        )
    except ValueError as e:
        raise e
    except stripe.error.SignatureVerificationError as e:
        raise e

    # サブスクリプションの解約以外は何もしない
    if event["type"] != "customer.subscription.deleted":
        return {"success": True}

    # StripeのカスタマーID
    customer_id = event["data"]["object"]["customer"]

    # DynamoDBからカスタマーIDに紐づくCognitoユーザーIDを取り出す
    result = customer_table.get_item(Key={"CustomerId": customer_id})
    user_id = result["Item"]["UserId"]
    api_key_id = result["Item"]["ApiKeyId"]

    # APIキーを削除
    result = apigateway_cli.delete_api_key(apiKey=api_key_id)

    # DynamoDBからPRO版のAPIキーを削除
    api_key_table.delete_item(Key={"UserId": user_id, "Type": "PRO"})

    # ユーザープールのカスタム属性を更新
    cognito_cli.admin_update_user_attributes(
        UserPoolId=USER_POOL_ID,
        Username=user_id,
        UserAttributes=[
            {"Name": "custom:plan_type", "Value": "FREE"},
            {"Name": "custom:stripe_customer_id", "Value": customer_id},
        ],
    )

    return {"success": True}

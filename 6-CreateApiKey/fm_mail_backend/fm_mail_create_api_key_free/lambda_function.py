import boto3
import os

# 環境変数
REGION_NAME = os.environ["REGION_NAME"]
DYNAMODB_TABLE = os.environ["DYNAMODB_TABLE"]
REST_API_ID = os.environ["REST_API_ID"]
USAGE_PLAN_ID = os.environ["USAGE_PLAN_ID"]

dynamodb = boto3.resource("dynamodb", region_name=REGION_NAME)
table = dynamodb.Table(DYNAMODB_TABLE)
apigateway_cli = boto3.client("apigateway")
cognito_cli = boto3.client("cognito-idp")


def lambda_handler(event, context):
    # ユーザー名を取得
    user_name = event["userName"]

    # ユーザープールIDを取得
    user_pool_id = event["userPoolId"]

    # ユーザープールのカスタム属性を更新
    cognito_cli.admin_update_user_attributes(
        UserPoolId=user_pool_id,
        Username=user_name,
        UserAttributes=[
            {"Name": "custom:plan_type", "Value": "FREE"},
        ],
    )

    # APIキーを発行
    result = apigateway_cli.create_api_key(
        name="fm_mail_free_" + user_name,
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
    with table.batch_writer() as batch:
        batch.put_item(
            Item={
                "UserId": user_name,
                "Type": "FREE",
                "ApiKey": api_key,
                "ApiKeyId": api_key_id,
            }
        )

    # eventを返さないとCognito側で「Unrecognizable lambda output」というエラーになる
    return event

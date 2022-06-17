import boto3
import os
from chalice import Chalice, CognitoUserPoolAuthorizer

app = Chalice(app_name="fm_mail_delete_user")

# 環境変数
USER_POOL_ARN = os.environ.get("USER_POOL_ARN")
USER_POOL_NAME = os.environ.get("USER_POOL_NAME")
USER_POOL_ID = os.environ.get("USER_POOL_ID")
DYNAMODB_API_KEY_TABLE = os.environ.get("DYNAMODB_API_KEY_TABLE")
REGION_NAME = os.environ.get("REGION_NAME")

# Cognitoで認証する
authorizer = CognitoUserPoolAuthorizer(USER_POOL_NAME, provider_arns=[USER_POOL_ARN])

# DynamoDBに接続
dynamodb = boto3.resource("dynamodb", region_name=REGION_NAME)
api_key_table = dynamodb.Table(DYNAMODB_API_KEY_TABLE)

# API Gatewayの設定用クライアント
apigateway_cli = boto3.client("apigateway")

# Cognitoの設定用クライアント
cognito_cli = boto3.client("cognito-idp")


@app.route("/delete-user", authorizer=authorizer, cors=True)
def delete_user():
    # 認証情報からUserNameを取り出す
    context = app.current_request.context
    user_name = context["authorizer"]["claims"]["cognito:username"]

    # DynamoDBからユーザーに紐づくAPIキーの情報を取り出す
    result = api_key_table.get_item(Key={"UserId": user_name, "Type": "FREE"})
    api_key_id = result["Item"]["ApiKeyId"]

    # APIキーを削除
    result = apigateway_cli.delete_api_key(apiKey=api_key_id)

    # DynamoDBからFREE版のAPIキーを削除
    api_key_table.delete_item(Key={"UserId": user_name, "Type": "FREE"})

    # ユーザーを無効化
    cognito_cli.admin_disable_user(
        UserPoolId=USER_POOL_ID,
        Username=user_name,
    )

    return {"success": True}

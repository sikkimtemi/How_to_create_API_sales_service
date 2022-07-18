import boto3
from boto3.dynamodb.conditions import Key
import json
import os
from chalice import Chalice, CognitoUserPoolAuthorizer

app = Chalice(app_name="dynamodb_api")

# 環境変数
USER_POOL_ARN = os.environ.get("USER_POOL_ARN")
USER_POOL_NAME = os.environ.get("USER_POOL_NAME")
DYNAMODB_TABLE = os.environ.get("DYNAMODB_TABLE")
REGION_NAME = os.environ.get("REGION_NAME")

# Cognitoで認証する
authorizer = CognitoUserPoolAuthorizer(USER_POOL_NAME, provider_arns=[USER_POOL_ARN])

# DynamoDBに接続
dynamodb = boto3.resource("dynamodb", region_name=REGION_NAME)
table = dynamodb.Table(DYNAMODB_TABLE)


@app.route("/apikey", authorizer=authorizer, cors=True)
def get_my_api_key():
    # 認証情報からUserNameを取り出す
    context = app.current_request.context
    user_name = context["authorizer"]["claims"]["cognito:username"]

    # DynamoDBからユーザーに紐づくAPIキーの情報を取り出す
    result = table.query(KeyConditionExpression=Key("UserId").eq(user_name))

    resp = {"status": "OK", "result": result, "UserName": user_name}

    # 結果を返す
    return json.dumps(resp, ensure_ascii=False)

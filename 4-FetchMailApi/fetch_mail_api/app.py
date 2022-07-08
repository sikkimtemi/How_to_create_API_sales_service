import json
from chalice import Chalice
from imap2dict import MailClient


app = Chalice(app_name="fetch_mail_api")


@app.route("/fetch_mail", methods=["POST"], api_key_required=True)
def fetch_mail():
    # リクエストパラメータの解析
    request_params = app.current_request.json_body
    # hostname, user_id, passwordは必須
    host_name = request_params["host_name"]
    user_id = request_params["user_id"]
    password = request_params["password"]
    # search_optionとtimezoneは省略可能
    search_option = (
        request_params["search_option"]
        if "search_option" in request_params
        else "UNSEEN"
    )
    timezone = (
        request_params["timezone"] if "timezone" in request_params else "Asia/Tokyo"
    )

    # メールを受信
    cli = MailClient(host_name, user_id, password)
    messages = cli.fetch_mail(search_option=search_option, timezone=timezone)
    resp = {"status": "OK", "messages": messages}

    # 結果を返す
    return json.dumps(resp, ensure_ascii=False)


@app.route("/delete_mail", methods=["DELETE"], api_key_required=True)
def delete_mail():
    # リクエストパラメータの解析
    request_params = app.current_request.json_body
    # hostname, user_id, passwordは必須
    host_name = request_params["host_name"]
    user_id = request_params["user_id"]
    password = request_params["password"]
    # daysは省略可能
    days = request_params["days"] if "days" in request_params else 90

    # メールを削除
    cli = MailClient(host_name, user_id, password)
    delete_count = cli.delete_mail(days=days)

    # 結果を返す
    return {"delete_count": delete_count}

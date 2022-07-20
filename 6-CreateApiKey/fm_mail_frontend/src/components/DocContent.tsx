import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MailRecive001Img from '../img/mail_receive_sample001.png';
import MailRecive002Img from '../img/mail_receive_sample002.png';
import MailRecive003Img from '../img/mail_receive_sample003.png';
import MailRecive004Img from '../img/mail_receive_sample004.png';
import MailRecive005Img from '../img/mail_receive_sample005.png';
import MailRecive006Img from '../img/mail_receive_sample006.png';

const body = `
# FM Mailの使い方

## サンプルアプリのダウンロード

[こちら](https://fmmail.s3.ap-northeast-1.amazonaws.com/mail_receive_sample.fmp12)からサンプルアプリをダウンロードしてください。

![サンプルアプリ](${MailRecive001Img})

## ユーザー登録

右上の「新規登録」ボタンからユーザー登録してください。登録済みの場合は「ログイン」ボタンからログインしてください。

![新規登録ボタン](${MailRecive002Img})

## APIキーの確認

上部メニューの「APIキーの確認」をクリックしてください。APIキーが表示されたらコピーしてください。

APIキーは秘密にしてください。

![APIキーの確認](${MailRecive003Img})

## サンプルアプリの設定

サンプルアプリを開き、右上の歯車アイコンをクリックしてください。

![設定ボタン](${MailRecive004Img})

設定画面が別ウィンドウで開きます。

![設定画面](${MailRecive005Img})

次の表を参考に値を設定してください。

設定項目|説明
-|-
メールサーバーのホスト名|メールサーバー（IMAP4サーバー）のホスト名を入力してください。
ユーザーID|メールサーバー（IMAP4サーバー）のユーザーIDを入力してください。FileMaker専用のアカウントを用意することをお勧めします。
パスワード|ユーザーIDに対応するパスワードを入力してください。
FM MailのAPIキー|「APIキーの確認」でコピーしたAPIキーをペーストしてください。

設定が完了したら設定画面を閉じてください。

## メールの受信

新着メール（未読メール）のみを受信したい場合は「新着メール受信」ボタンをクリックしてください。

UIDを指定してメールを受信したい場合は「UID指定で受信」ボタンをクリックしてください。

受信に成功すると受信結果がFileMakerのレコードとして格納されます。

![受信結果の例](${MailRecive006Img})

## 制限事項

FM Mailには以下の制限がございます。あらかじめご了承ください。

### ペイロードについて

APIのペイロード（リクエストとレスポンスの合計）は6MBに制限されています。この値を超えるとAPIはエラーを返します。大量のメールを一度に受信しようとしたり、大きなファイルが添付されたメールを受信しようとすると、ペイロード制限によるエラーが発生いたしますのでお気をつけください。

### APIの予期せぬエラーについて

一時的に予期せぬエラーが発生する場合があります。その場合はしばらく時間をおいてから再実行してください。

エラーが発生すると、データは未取得でもIMAP4サーバー上のメールが既読状態となる場合があります。「新着メール受信」では既読状態のメールは取り込まれません。メールの取りこぼしが発生した場合は「UID指定で受信」を用いて再取り込みしてください。

### APIの回数制限

1か月あたりのAPIの実行回数には上限があります。実行回数が上限に達するとAPIはエラーとなります。FREE版の上限は100回です。メールの受信頻度を上げたい場合はPRO版をご検討ください。
`;

const DocContent: FC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="prose mx-auto max-w-screen-md justify-center px-4 md:px-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </div>
  </section>
);
export default DocContent;

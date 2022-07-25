import { FC } from 'react';
import Notice from '../components/Notice';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

// 擬似的な通知ページ（動的な通知機能は必要になったら実装する）
const MyPage: FC = () => {
  const title = 'ご登録ありがとうございます';
  const message = `この度はFM Mailにユーザー登録いただきありがとうございます。

APIキーは「APIキーの確認」で表示できます。

詳しいご利用方法は下部の「使い方」をご覧ください。

有料プランへの切り替えは「アップグレード」よりお進みください。`;

  return (
    <AuthenticatedLayout>
      <Notice title={title} message={message} />
      <Spacer size={50} />
    </AuthenticatedLayout>
  );
};

export default MyPage;

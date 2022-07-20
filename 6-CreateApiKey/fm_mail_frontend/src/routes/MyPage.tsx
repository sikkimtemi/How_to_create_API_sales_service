import { FC } from 'react';
import Notice from '../components/Notice';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

// マイページ
const MyPage: FC = () => {
  const title = '現在のプラン';
  const message = `ご利用中のプランはFREEプランです。`;

  return (
    <AuthenticatedLayout>
      <Notice title={title} message={message} />
      <Spacer size={50} />
    </AuthenticatedLayout>
  );
};

export default MyPage;

import { FC } from 'react';
import { useAtom } from 'jotai';
import Notice from '../components/Notice';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import stateUserAttribute from '../atom/UserAttribute';

// マイページ
const MyPage: FC = () => {
  // ユーザー属性から現在のプランを取り出す
  const [userAttribute] = useAtom(stateUserAttribute);
  const planType = userAttribute?.planType;
  const title = '現在のプラン';
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const message = `ご利用中のプランは${planType}プランです。`;

  return (
    <AuthenticatedLayout>
      <Notice title={title} message={message} />
      <Spacer size={50} />
    </AuthenticatedLayout>
  );
};

export default MyPage;

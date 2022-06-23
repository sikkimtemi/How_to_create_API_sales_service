import { FC } from 'react';
import CanceledContent from '../components/CanceledContent';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import type { ThanksProps } from '../components/ThanksContent';

// 認証後のキャンセル画面
const CanceledAuth: FC<ThanksProps> = ({ message }) => (
  <AuthenticatedLayout>
    <CanceledContent message={message} />
    <Spacer size={50} />
  </AuthenticatedLayout>
);

export default CanceledAuth;

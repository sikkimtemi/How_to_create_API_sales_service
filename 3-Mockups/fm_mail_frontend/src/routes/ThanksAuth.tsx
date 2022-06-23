import { FC } from 'react';
import ThanksContent from '../components/ThanksContent';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import type { ThanksProps } from '../components/ThanksContent';

// 認証後のサンクス画面
const Thanks: FC<ThanksProps> = ({ message }) => (
  <AuthenticatedLayout>
    <ThanksContent message={message} />
    <Spacer size={50} />
  </AuthenticatedLayout>
);

export default Thanks;

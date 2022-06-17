import { FC } from 'react';
import ThanksContent from '../components/ThanksContent';
import Spacer from '../components/Spacer';
import PublicLayout from '../layouts/PublicLayout';
import type { ThanksProps } from '../components/ThanksContent';

// 公開ページのサンクス画面
const Thanks: FC<ThanksProps> = ({ message }) => (
  <PublicLayout>
    <ThanksContent message={message} />
    <Spacer size={50} />
  </PublicLayout>
);

export default Thanks;

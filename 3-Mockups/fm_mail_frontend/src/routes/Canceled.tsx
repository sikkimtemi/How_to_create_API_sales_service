import { FC } from 'react';
import CanceledContent from '../components/CanceledContent';
import Spacer from '../components/Spacer';
import PublicLayout from '../layouts/PublicLayout';
import type { ThanksProps } from '../components/ThanksContent';

// 公開ページのキャンセル画面
const Canceled: FC<ThanksProps> = ({ message }) => (
  <PublicLayout>
    <CanceledContent message={message} />
    <Spacer size={50} />
  </PublicLayout>
);

export default Canceled;

import { FC } from 'react';
import TokusyouhouContent from '../components/TokusyouhouContent';
import PublicLayout from '../layouts/PublicLayout';

// 特定商取引法に基づく表記
const Tokusyouhou: FC = () => (
  <PublicLayout>
    <TokusyouhouContent />
  </PublicLayout>
);

export default Tokusyouhou;

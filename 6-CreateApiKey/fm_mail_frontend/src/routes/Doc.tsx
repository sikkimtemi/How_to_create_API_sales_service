import { FC } from 'react';
import DocContent from '../components/DocContent';
import PublicLayout from '../layouts/PublicLayout';

// 使い方ガイド
const Doc: FC = () => (
  <PublicLayout>
    <DocContent />
  </PublicLayout>
);

export default Doc;

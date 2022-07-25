import { FC } from 'react';
import PrivacyPolicyContent from '../components/PrivacyPolicyContent';
import PublicLayout from '../layouts/PublicLayout';

// プライバシーポリシー
const PrivacyPolicy: FC = () => (
  <PublicLayout>
    <PrivacyPolicyContent />
  </PublicLayout>
);

export default PrivacyPolicy;

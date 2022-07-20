import { FC } from 'react';
import ApiKey from '../components/ApiKey';
import Spacer from '../components/Spacer';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

// APIキー確認ページ
const ShowApiKey: FC = () => (
  <AuthenticatedLayout>
    <ApiKey />
    <Spacer size={50} />
  </AuthenticatedLayout>
);

export default ShowApiKey;

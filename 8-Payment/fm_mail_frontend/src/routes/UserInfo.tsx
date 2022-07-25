import { FC } from 'react';
import UserInfoContent from '../components/UserInfoContent';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';

// ユーザー情報
const UserInfo: FC = () => (
  <AuthenticatedLayout>
    <UserInfoContent />
  </AuthenticatedLayout>
);

export default UserInfo;

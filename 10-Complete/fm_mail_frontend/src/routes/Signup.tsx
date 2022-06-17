import { FC } from 'react';
import SignupForm from '../components/SignupForm';
import Spacer from '../components/Spacer';
import PublicLayout from '../layouts/PublicLayout';

// 新規ユーザー登録画面
const Signup: FC = () => (
  <PublicLayout>
    <Spacer size={250} />
    <SignupForm />
    <Spacer size={250} />
  </PublicLayout>
);

export default Signup;

import { FC } from 'react';
import LoginForm from '../components/LoginForm';
import Spacer from '../components/Spacer';
import PublicLayout from '../layouts/PublicLayout';

// ログイン画面
const Login: FC = () => (
  <PublicLayout>
    <Spacer size={250} />
    <LoginForm />
    <Spacer size={250} />
  </PublicLayout>
);

export default Login;

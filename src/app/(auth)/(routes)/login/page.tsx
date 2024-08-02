import { FC } from 'react';

import ContainerLogin from '@/components/Containers/Auth/Login';

export const metadata = {
  title: 'Login - Sekawan Media FE Test',
  description: 'Login to Sekawan Media FE Test',
};

const LoginPage: FC = () => {
  return <ContainerLogin />;
};

export default LoginPage;

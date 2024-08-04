'use client';
import { FC, ReactNode, useEffect } from 'react';
import { redirect } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  // Define hooks
  const { user } = useAuth();

  // Redirect to dashboard if user is authenticated
  useEffect(() => {
    if (user) redirect('/');
  }, [user]);

  return (
    <main className="flex items-center justify-center w-full min-h-screen bg-[#363740]">
      {children}
    </main>
  );
};

export default AuthLayout;

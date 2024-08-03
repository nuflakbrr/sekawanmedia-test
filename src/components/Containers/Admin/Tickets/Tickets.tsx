'use client';
import { FC } from 'react';
import { redirect } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';

const ContainerTicketsAdmin: FC = () => {
  const { user } = useAuth();

  if (user?.role !== 'admin') {
    return redirect('/');
  }

  return <div>ContainerTicketsAdmin</div>;
};

export default ContainerTicketsAdmin;

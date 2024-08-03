'use client';
import { FC } from 'react';
import { redirect } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';

const ContainerTickets: FC = () => {
  const { user } = useAuth();

  if (user?.role === 'admin') {
    return redirect('/admin');
  }

  return <div>ContainerTickets</div>;
};

export default ContainerTickets;

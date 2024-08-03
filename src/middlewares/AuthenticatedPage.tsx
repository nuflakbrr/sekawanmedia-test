'use client';
import { FC, ReactNode, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/components/ui/use-toast';
import Loader from '@/components/Common/Loader';

type Props = {
  children: ReactNode;
};

const AuthenticatedPage: FC<Props> = ({ children }) => {
  const t = useTranslations('AuthenticatedPage');

  const { isLoading, user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        description: t('alert'),
        variant: 'destructive',
      });
      localStorage.clear();
      redirect('/login');
    }
  }, [isLoading, toast, user, t]);

  if (!isLoading && !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        {t('text')}...
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthenticatedPage;

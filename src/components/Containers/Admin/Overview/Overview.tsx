'use client';
import { FC, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

import { useAxios } from '@/hooks/useAxios';
import { useAuth } from '@/hooks/useAuth';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ContainerOverview: FC = () => {
  // Define translations
  const t = useTranslations('HomePage');

  // Define hooks
  const { accessToken, user } = useAuth();
  const axios = useAxios(accessToken);

  // Data fetching
  const getTicket = useCallback(async () => {
    try {
      const response = await axios.get('ticket/graph');
      console.log(response.data);
    } catch (error) {
      console.error('GET_TICKET_ERROR', error);
    }
  }, [axios]);

  // Mounted data fetching
  useEffect(() => {
    getTicket();
  }, [getTicket]);

  // Protected routes
  if (user?.role !== 'admin') {
    return redirect('/');
  }

  return (
    <section className="max-w-7xl mx-auto">
      {t('title')}
      <h1>awdawda</h1>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </section>
  );
};

export default ContainerOverview;

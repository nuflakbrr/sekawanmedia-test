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

  const { accessToken, user } = useAuth();
  const axios = useAxios(accessToken);

  const getTicket = useCallback(async () => {
    try {
      const response = await axios.get('ticket/graph');
      console.log(response.data);
    } catch (error) {
      console.error('GET_TICKET_ERROR', error);
    }
  }, [axios]);

  useEffect(() => {
    getTicket();
  }, [getTicket]);

  if (user?.role !== 'admin') {
    return redirect('/tickets');
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

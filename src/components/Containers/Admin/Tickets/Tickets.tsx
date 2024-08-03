'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import moment from 'moment';

import { useAuth } from '@/hooks/useAuth';
import { useAxios } from '@/hooks/useAxios';
import { useToast } from '@/components/ui/use-toast';
import { Ticket } from '@/interfaces/ticket';
import { ColumnProps } from './components/Columns';
import TicketsClient from './components/Client';

const ContainerTicketsAdmin: FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const { accessToken, user } = useAuth();
  const { toast } = useToast();
  const axios = useAxios(accessToken);

  const getTicket = useCallback(async () => {
    try {
      setInterval(async () => {
        const response = await axios.get('ticket');
        setTickets(response.data.data);
      }, 5000);
    } catch (error) {
      console.error('GET_TICKET_ERROR', error);
      toast({ description: 'Something went wrong', variant: 'destructive' });
    }
  }, [axios, toast]);

  useEffect(() => {
    getTicket();
  }, [getTicket]);

  if (user?.role !== 'admin') {
    return redirect('/');
  }

  const formattedTickets: ColumnProps[] = tickets.map((item) => ({
    id: item.id,
    title: item.title,
    content: item.content,
    customerName: item.customerName,
    priority: item.priority,
    status: item.status,
    createdAt: moment(item.createdAt).format('DD MMM YYYY'),
    updatedAt: moment(item.updatedAt).format('DD MMM YYYY'),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <TicketsClient data={formattedTickets} />
      </div>
    </div>
  );
};

export default ContainerTicketsAdmin;

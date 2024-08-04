'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import { useAxios } from '@/hooks/useAxios';
import { useAuth } from '@/hooks/useAuth';
import { TicketOverview, TicketStatus } from '@/interfaces/ticket';
import Stats from './components/Stats';
import Chart from './components/Chart';
import SummaryTask from './components/SummaryTask';

const ContainerOverview: FC = () => {
  // Define state
  const [overview, setOverview] = useState<TicketOverview | null>(null);
  const [status, setStatus] = useState<TicketStatus | null>(null);
  const [graph, setGraph] = useState<any[]>([]);

  // Define hooks
  const { accessToken, user } = useAuth();
  const axios = useAxios(accessToken);

  // Data fetching
  const getTicketOverview = useCallback(async () => {
    try {
      const response = await axios.get('ticket/overview');
      setOverview(response.data.data);
      setStatus(response.data.status);
    } catch (error) {
      console.error('GET_TICKET_ERROR', error);
    }
  }, [axios]);

  const getTicketGraph = useCallback(async () => {
    try {
      const response = await axios.get('ticket/graph');
      setGraph(response.data.data);
    } catch (error) {
      console.error('GET_TICKET_GRAPH_ERROR', error);
    }
  }, [axios]);

  // Mounted data fetching
  useEffect(() => {
    getTicketOverview();
    getTicketGraph();
  }, [getTicketGraph, getTicketOverview]);

  // Protected routes
  if (user?.role !== 'admin') {
    return redirect('/');
  }

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <Stats data={overview} />
        <Chart data={graph} />
        <SummaryTask data={status} />
      </div>
    </div>
  );
};

export default ContainerOverview;

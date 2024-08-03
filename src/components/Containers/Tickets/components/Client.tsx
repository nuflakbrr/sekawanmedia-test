'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Heading from '@/components/Common/Heading';
import Columns, { ColumnProps } from './Columns';

interface TicketsClientProps {
  data: ColumnProps[];
}

const TicketsClient: FC<TicketsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Heading title="All Ticket" />
          <Button
            onClick={() => router.push('/admin/create')}
            className="dark:text-white"
          >
            <Plus className="mr-2 h-4 w-4" /> Buat Ticket
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Separator />
        <DataTable searchKey="title" columns={Columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default TicketsClient;

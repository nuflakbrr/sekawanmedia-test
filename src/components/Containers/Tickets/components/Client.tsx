'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Heading from '@/components/Common/Heading';
import Columns, { ColumnProps } from './Columns';
import CreateTicketModal from '@/components/Common/Modal/CreateTicketModal';

interface TicketsClientProps {
  data: ColumnProps[];
}

const TicketsClient: FC<TicketsClientProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const t = useTranslations('TicketsPage');

  return (
    <>
      <CreateTicketModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Heading title={t('title')} />
            <Button onClick={() => setIsOpen(true)} className="dark:text-white">
              <Plus className="mr-2 h-4 w-4" /> Buat Ticket
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Separator />
          <DataTable searchKey="title" columns={Columns} data={data} />
        </CardContent>
      </Card>
    </>
  );
};

export default TicketsClient;

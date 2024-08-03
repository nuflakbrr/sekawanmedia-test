'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/data-table';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Heading from '@/components/Common/Heading';
import Columns, { ColumnProps } from './Columns';

interface TicketsClientProps {
  data: ColumnProps[];
}

const TicketsClient: FC<TicketsClientProps> = ({ data }) => {
  const t = useTranslations('TicketsPage');

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Heading title={t('title')} />
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

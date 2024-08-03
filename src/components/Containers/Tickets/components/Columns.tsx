import { ColumnDef } from '@tanstack/react-table';

import CellAction from './CellAction';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export type ColumnProps = {
  id: string | any;
  title: string;
  content: string;
  customerName: string;
  priority: string;
  status: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

const formatBadge = (status: string) => {
  switch (status) {
    case 'low':
      return 'success';
    case 'medium':
      return 'warning';
    case 'high':
      return 'destructive';
    default:
      return 'default';
  }
};

const Columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: 'id',
    header: 'No',
    cell: ({ row }) => row.index + 1,
  },
  // {
  //   accessorKey: 'imageUrl',
  //   header: 'Sampul',
  //   cell: ({ row }) => (
  //     <img
  //       src={row.original.imageUrl || ''}
  //       alt={row.original.title}
  //       className="w-[150px] h-[84.375px] rounded-md object-cover object-center"
  //       loading="lazy"
  //     />
  //   ),
  // },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
  },
  {
    accessorKey: 'content',
    header: 'Content',
    cell: ({ row }) => (
      <div className="truncate w-40">{row.original.content}</div>
    ),
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Badge
        variant={formatBadge(row.original.priority)}
        className="dark:text-white"
      >
        {row.original.priority}
      </Badge>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

export default Columns;

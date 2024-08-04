import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import CellAction from './CellAction';

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

// Format badge
const formatPriority = (status: string) => {
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

const formatStatus = (status: string) => {
  switch (status) {
    case 'approved':
      return 'success';
    case 'pending':
      return 'warning';
    case 'rejected':
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
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="capitalize">
            {row &&
              row.original.customerName &&
              row.original.customerName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {row.original.customerName}
      </div>
    ),
  },
  {
    accessorKey: 'title',
    header: 'Title',
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
        variant={formatPriority(row.original.priority)}
        className="dark:text-white capitalize"
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
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Badge
        variant={formatStatus(row.original.status)}
        className="dark:text-white capitalize"
      >
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Updated At
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

'use client';
import { FC, useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

import { ColumnProps } from './Columns';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import PreviewModal from '@/components/Common/Modal/PreviewModal';

interface CellActionProps {
  data: ColumnProps;
}

const CellAction: FC<CellActionProps> = ({ data }) => {
  // Define state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <PreviewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={data}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open Menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            Detail
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;

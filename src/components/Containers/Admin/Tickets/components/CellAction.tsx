'use client';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CircleCheck, CircleX, Info, MoreHorizontal } from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';
import { useAxios } from '@/hooks/useAxios';
import { ColumnProps } from './Columns';
import { useToast } from '@/components/ui/use-toast';
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
  const { toast } = useToast();
  const { accessToken } = useAuth();
  const axios = useAxios(accessToken);
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onUpdate = async (dataTable: ColumnProps, status: string) => {
    setLoading(true);

    const sendData = {
      id: dataTable,
      status: status,
      updatedAt: new Date().toISOString(),
    };

    try {
      const { data } = await axios.put('ticket', sendData);
      setLoading(false);
      router.refresh();
      toast({ description: data.message });
    } catch (error) {
      toast({ description: 'Something went wrong', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PreviewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={data}
        onRejected={() => {
          onUpdate(data.id, 'rejected');
          setIsOpen(false);
        }}
        onApproved={() => {
          onUpdate(data.id, 'approved');
          setIsOpen(false);
        }}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild disabled={loading}>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open Menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Info className="h-4 w-4 mr-2" />
            Detail
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onUpdate(data.id, 'approved')}>
            <CircleCheck className="h-4 w-4 mr-2" />
            Approve
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onUpdate(data.id, 'rejected')}>
            <CircleX className="h-4 w-4 mr-2" />
            Rejected
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;

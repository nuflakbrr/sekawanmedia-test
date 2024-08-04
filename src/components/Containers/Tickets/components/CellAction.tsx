'use client';
import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Info, MoreHorizontal } from 'lucide-react';

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

  // Define translations
  const t = useTranslations('CellAction');

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
          <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Info className="h-4 w-4 mr-2" />
            {t('detail')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CellAction;

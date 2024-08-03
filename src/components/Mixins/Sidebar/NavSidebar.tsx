'use client';
import { FC} from 'react';
import { useTranslations } from 'next-intl';
import { Bell, Search } from 'lucide-react';

import UserNav from '@/components/Common/UserNav';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import MobileSidebar from './MobileSidebar';

const NavSidebar: FC = () => {
  const t = useTranslations('Tooltip');

  return (
    <div className="p-4 border-b h-16 flex items-center bg-white dark:bg-[#020817] shadow-sm">
      <MobileSidebar />
      <div className="flex items-center ml-auto space-x-4">
        <Tooltip>
          <TooltipTrigger>
            <Search className="text-[#6B7280]" />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{t('search')}</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Bell className="text-[#6B7280]" />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{t('notification')}</p>
          </TooltipContent>
        </Tooltip>
        <UserNav />
      </div>
    </div>
  );
};

export default NavSidebar;

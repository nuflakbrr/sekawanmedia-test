/* eslint-disable prettier/prettier */
'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Bell, Search } from 'lucide-react';

import UserNav from '@/components/Common/UserNav';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import MobileSidebar from './MobileSidebar';
import { usePathname } from 'next/navigation';

const NavSidebar: FC = () => {
  // Define translations
  const t = useTranslations('Tooltip');

  // Define hooks and isAdminPage
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  // Data title page
  const titlePageAdmin = ['overview', 'tickets', 'settings'];
  const titlePageGuest = ['tickets', 'settings'];

  // Condition if user is admin
  const titlePage = isAdminPage
    ? titlePageAdmin.find(
      (title) => pathname === `/admin/${title}` || pathname === '/admin',
    )
    : titlePageGuest.find((title) => pathname === `/${title}` || pathname === '/');

  return (
    <div className="p-4 h-16 flex items-center bg-[#F3F4F6] dark:bg-background">
      <MobileSidebar />
      <h1 className="text-xl font-bold text-[#1E293B] dark:text-white capitalize">
        {titlePage}
      </h1>
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

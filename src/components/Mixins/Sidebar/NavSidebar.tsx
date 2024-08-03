'use client';
import { FC } from 'react';
import { Bell, Search } from 'lucide-react';

// import TranslationToggle from '@/components/Common/TranslationToggle';
// import ThemeToggle from '@/components/Common/ThemeToggle';
import UserNav from '@/components/Common/UserNav';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import MobileSidebar from './MobileSidebar';

const NavSidebar: FC = () => {
  return (
    <div className="p-4 border-b h-16 flex items-center bg-white dark:bg-[#020817] shadow-sm">
      <MobileSidebar />
      <div className="flex items-center ml-auto space-x-4">
        {/* <TranslationToggle />
        <ThemeToggle /> */}
        <Tooltip>
          <TooltipTrigger>
            <Search className="text-[#6B7280]" />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Search</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Bell className="text-[#6B7280]" />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Notification</p>
          </TooltipContent>
        </Tooltip>
        <UserNav />
      </div>
    </div>
  );
};

export default NavSidebar;

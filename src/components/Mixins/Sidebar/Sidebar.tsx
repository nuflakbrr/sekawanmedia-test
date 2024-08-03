'use client';
import { FC } from 'react';

import SidebarRoutes from './SidebarRoutes';

const Sidebar: FC = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto shadow-sm bg-[#1F2937] dark:bg-background">
      <div className="p-5 flex items-center justify-center gap-2">
        <span className="text-2xl font-bold text-white">Dashboard Kit</span>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;

'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ChartBar, Cog, Ticket } from 'lucide-react';

import SidebarItem from './SidebarItem';

const SidebarRoutes: FC = () => {
  // Define translations
  const t = useTranslations('Sidebar');

  // Define hooks
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith('/admin');

  const adminRoutes = [
    {
      href: '/admin',
      label: t('overview'),
      active: pathname === '/admin',
      icon: ChartBar,
    },
    {
      href: '/admin/tickets',
      label: t('tickets'),
      active: pathname === '/admin/tickets',
      icon: Ticket,
    },
    {
      href: '/admin/settings',
      label: t('settings'),
      active: pathname === '/admin/settings',
      icon: Cog,
    },
  ];

  const memberRoutes = [
    {
      href: '/',
      label: t('tickets'),
      active: pathname === '/',
      icon: Ticket,
    },
    {
      href: '/settings',
      label: t('settings'),
      active: pathname === '/settings',
      icon: Cog,
    },
  ];

  const routes = isAdminPage ? adminRoutes : memberRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;

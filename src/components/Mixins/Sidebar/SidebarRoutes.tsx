'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ChartBar, Ticket } from 'lucide-react';

import SidebarItem from './SidebarItem';

const SidebarRoutes: FC = () => {
  // Define translations
  const t = useTranslations('Sidebar');

  // Define hooks
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith('/admin');

  const adminRoutes = [
    {
      href: '/admin/overview',
      label: t('overview'),
      active: pathname === '/admin/overview',
      icon: ChartBar,
    },
    {
      href: '/admin/tickets',
      label: t('tickets'),
      active: pathname === '/admin/tickets',
      icon: Ticket,
    },
  ];

  const memberRoutes = [
    {
      href: '/',
      label: t('overview'),
      active: pathname === '/',
      icon: ChartBar,
    },
    {
      href: '/tickets',
      label: t('tickets'),
      active: pathname === '/tickets',
      icon: Ticket,
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

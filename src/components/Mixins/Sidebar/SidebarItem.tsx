'use client';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ href, icon: Icon, label }) => {
  // Define hooks
  const pathname = usePathname();

  // Define isActive
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-x-2 text-zinc-500 text-sm font-[500] transition-all hover:text-zinc-50 hover:bg-zinc-200/20',
        isActive &&
          'text-zinc-50 bg-zinc-200/20 hover:bg-zinc-200/20 hover:text-zinc-50',
      )}
    >
      <div
        className={cn(
          'opacity-0 border-2 border-zinc-300 h-full transition-all',
          isActive && 'opacity-100',
        )}
      />
      <div className="flex items-center gap-x-2 pl-6 py-4">
        <Icon
          size={22}
          className={cn('text-zinc-500', isActive && 'text-zinc-400')}
        />
        {label}
      </div>
    </Link>
  );
};

export default SidebarItem;

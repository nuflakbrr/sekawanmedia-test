'use client';
import { FC, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { LogOut } from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const UserNav: FC = () => {
  // Define translations
  const t = useTranslations('Sidebar');

  // Define hooks
  const { user, logout } = useAuth();

  return (
    <div className="md:border-l flex items-center">
      <div className="hidden md:flex items-center justify-center ml-3 md:mr-3 lg:mr-0">
        <p className="text-sm text-gray-700 capitalize dark:text-white">
          {user && user.role} User
        </p>
      </div>

      <Menu as="div" className="relative lg:ml-3">
        <MenuButton className="flex text-sm">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="capitalize">
              {user && user.name && user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white dark:bg-background rounded-md shadow-lg">
            <MenuItem>
              <button
                onClick={() => logout()}
                className="flex items-center min-w-full px-4 py-2 text-sm text-gray-700 dark:text-white"
              >
                <LogOut className="mr-2" />
                {t('logout')}
              </button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserNav;

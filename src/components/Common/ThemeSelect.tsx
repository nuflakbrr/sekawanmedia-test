'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ThemeSelect: FC = () => {
  // Define translation
  const t = useTranslations('Theme');
  // Define hooks
  const { setTheme, theme } = useTheme();

  // Onchange function
  function onChange(value: string) {
    const val = value as 'light' | 'dark' | 'system';
    setTheme(val);
  }

  return (
    <Select
      defaultValue={theme}
      onValueChange={(value) => {
        onChange(value);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">{t('light')}</SelectItem>
        <SelectItem value="dark">{t('dark')}</SelectItem>
        <SelectItem value="system">{t('system')}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSelect;

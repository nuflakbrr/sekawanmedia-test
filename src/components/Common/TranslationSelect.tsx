'use client';
import { FC, useTransition } from 'react';
import { useLocale } from 'next-intl';

import { Locale } from '@/lib/locale';
import { cn } from '@/lib/utils';
import { setUserLocale } from '@/services/locale';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TranslationSelect: FC = () => {
  // Define state
  const [isPending, startTransition] = useTransition();
  // Define current locale
  const locale = useLocale();

  // Onchange funtion
  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={(value) => {
        onChange(value);
      }}
    >
      <SelectTrigger
        className={cn(isPending && 'pointer-events-none opacity-60', 'w-full')}
      >
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="id">Indonesia</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TranslationSelect;

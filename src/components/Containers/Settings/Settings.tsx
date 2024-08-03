'use client'
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TranslationSelect from '@/components/Common/TranslationSelect';
import ThemeSelect from '@/components/Common/ThemeSelect';

const ContainerSettings: FC = () => {
  const t = useTranslations('SettingsPage');

  const { user } = useAuth();

  if (user?.role === 'admin') {
    return redirect('/admin');
  }

  if (user?.role === 'guest') {
    return redirect('/');
  }

  return (
    <section className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('title')}</CardTitle>
                <CardDescription>{t('subTitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <h3 className="mb-2">{t('language')}</h3>
                  <TranslationSelect />
                </div>

                <div className="">
                  <h3 className="mb-2">{t('theme')}</h3>
                  <ThemeSelect />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerSettings;

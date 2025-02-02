'use client';
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

const ContainerSettingsAdmin: FC = () => {
  // Define translation
  const t = useTranslations('SettingsPage');

  // Define hooks
  const { user } = useAuth();

  // Protected routes
  if (user?.role !== 'admin') {
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

                <div>
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

export default ContainerSettingsAdmin;

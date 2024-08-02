import { FC } from 'react';
import { useTranslations } from 'next-intl';

const ContainerOverview: FC = () => {
  // Define translations
  const t = useTranslations('HomePage');

  return (
    <section className="max-w-7xl mx-auto">
      {t('title')}
      <h1>awdawda</h1>
    </section>
  );
};

export default ContainerOverview;

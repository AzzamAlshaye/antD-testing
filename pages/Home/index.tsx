import React from 'react';
import { useTranslation } from 'react-i18next';
import QuickActions, {
  type QuickActionItem,
} from '../../components/Dashboard/QuickActions';
import DashboardHero from '../../components/Dashboard/DashboardHero';
import RecentlyVisited, {
  type RecentlyItem,
} from '../../components/Dashboard/RecentlyVisited';
import TaskSection from '../../components/Dashboard/TaskSection';

export default () => {
  const { t } = useTranslation();

  const quickActions: QuickActionItem[] = [
    {
      key: 'create-complaint',
      label: t('dashboard.createComplains'),
      icon: 'plus',
    },
    {
      key: 'create-seasons',
      label: t('dashboard.createSeasons'),
      icon: 'refresh',
    },
    { key: 'create-group', label: t('dashboard.createGroup'), icon: 'layers' },
  ];
  const recentlyItems: RecentlyItem[] = [
    {
      id: 'rv-1',
      org: 'Ministry of Health',
      type: t('task.issue'),
      reporter: 'Reporter name',
      priority: t('task.high'),
    },
    {
      id: 'rv-2',
      org: 'Ministry of Health',
      type: t('task.response'),
      reporter: 'Reporter name',
      priority: t('task.high'),
    },
    {
      id: 'rv-3',
      org: 'Ministry of Health',
      type: t('task.issue'),
      reporter: 'Reporter name',
      priority: t('task.high'),
    },
  ];

  return (
    <div className='relative z-20 mx-auto w-full  px-[16px] lg:px-[40px]'>
      <div className='-mt-[120px]'>
        <DashboardHero />
      </div>

      <div className='mt-6 rounded-[6px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]'>
        <div className='grid gap-6 lg:grid-cols-[1fr_auto_1fr]'>
          <div>
            <QuickActions
              title={t('dashboard.quickActions')}
              actions={quickActions}
            />
          </div>

          <div className='hidden w-px bg-[#F0F0F0] lg:block' />

          <div>
            <RecentlyVisited
              title={t('dashboard.recentlyVisited')}
              items={recentlyItems}
            />
          </div>
        </div>
      </div>

      <div className='mt-7'>
        <TaskSection />
      </div>
    </div>
  );
};

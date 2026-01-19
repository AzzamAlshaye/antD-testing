import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardHero from '../../components/Dashboard/DashboardHero';
import QuickActions from '../../components/Dashboard/QuickActions';
import RecentlyVisited from '../../components/Dashboard/RecentlyVisited';
import TaskSection from '../../components/Dashboard/TaskSection';
import { useDashboardData } from './useDashboardData';

export default () => {
  const { t } = useTranslation();
  const { data } = useDashboardData();

  return (
    <div className='relative z-20 mx-auto w-full px-[16px] pb-10 lg:px-[40px]'>
      <div className='-mt-[120px]'>
        <DashboardHero cards={data.heroCards} />
      </div>

      <div className='mt-6 rounded-[6px] bg-white p-6 shadow-card'>
        <div className='grid gap-6 lg:grid-cols-[1fr_auto_1fr]'>
          <div>
            <QuickActions
              title={t('dashboard.quickActions')}
              actions={data.quickActions}
            />
          </div>

          <div className='hidden w-px bg-[#F0F0F0] lg:block' />

          <div>
            <RecentlyVisited
              title={t('dashboard.recentlyVisited')}
              items={data.recentlyVisited}
            />
          </div>
        </div>
      </div>

      <div className='mt-7'>
        <TaskSection
          tasksByTab={data.tasksByTab}
          unassignedCount={data.unassignedCount}
        />
      </div>
    </div>
  );
};

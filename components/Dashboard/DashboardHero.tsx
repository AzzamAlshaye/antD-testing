// src/pages/Dashboard/components/DashboardHero.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import DonutChart from './DonutChart';

export default function DashboardHero(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <div className='mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <div className='rounded-[10px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]'>
          <div className='flex items-center gap-6'>
            <DonutChart
              mode='multi'
              value={63}
              label={t('dashboard.tasks')}
              colors={['#FF8A00', '#7C3AED', '#1F49FF', '#80C62A']}
              size={96}
              strokeWidth={10}
            />

            <div className='flex-1 divide-y divide-[#F0F0F0]'>
              <Row label={t('dashboard.issues')} value='12' dot='#FF8A00' />
              <Row
                label={t('dashboard.pendingResponses')}
                value='1'
                dot='#7C3AED'
              />
              <Row
                label={t('dashboard.supportRequests')}
                value='18'
                dot='#1F49FF'
              />
              <Row label={t('dashboard.review')} value='1265' dot='#80C62A' />
            </div>
          </div>
        </div>

        <div className='rounded-[10px] bg-white p-6 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]'>
          <div className='flex items-center gap-6'>
            <DonutChart
              mode='single'
              value={63}
              label={t('dashboard.teamTasks')}
              colors={['#1F49FF', '#00B3C6']}
              size={96}
              strokeWidth={10}
            />

            <div className='flex-1 divide-y divide-[#F0F0F0]'>
              <Row label={t('dashboard.assigned')} value='12' dot='#1F49FF' />
              <Row label={t('dashboard.unassigned')} value='1' dot='#00B3C6' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  dot,
}: {
  label: string;
  value: string;
  dot: string;
}): React.JSX.Element {
  return (
    <div className='flex items-center justify-between py-2 text-[12px]'>
      <div className='flex items-center gap-2 text-[#1A1A1A]'>
        <span
          className='h-[6px] w-[6px] rounded-full'
          style={{ background: dot }}
        />
        <span style={{ fontFamily: 'Rubik' }}>{label}</span>
      </div>

      <div
        className='font-semibold text-[#1A1A1A]'
        style={{ fontFamily: 'Rubik' }}
      >
        {value}
      </div>
    </div>
  );
}

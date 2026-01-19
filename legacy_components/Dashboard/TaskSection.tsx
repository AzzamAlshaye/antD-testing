import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Tag } from 'antd';
import { AppstoreOutlined, SortAscendingOutlined } from '@ant-design/icons';
import TaskRow, { type TaskItem } from './TaskRow';

type TabKey = 'my' | 'sent' | 'unassigned';

const TaskSection: React.FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<TabKey>('my');

  /** mock rows */
  const tasks: TaskItem[] = useMemo(
    () => [
      {
        id: 't1',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: t('task.captureSource'),
        statusText: t('task.pendingInvestigation'),
        statusDotColor: '#EBD400',
        priority: 'High' as 'High' | 'Medium',
      },
      {
        id: 't2',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: t('task.captureSource'),
        statusText: t('task.pendingInvestigation'),
        statusDotColor: '#EBD400',
        priority: 'High' as 'High' | 'Medium',
      },
      {
        id: 't3',
        category: 'SUPPORT',
        org: 'Ministry of Health',
        captureSource: t('task.captureSource'),
        statusText: t('task.pending'),
        statusDotColor: '#E83326',
        priority: 'Medium' as 'High' | 'Medium',
      },
      {
        id: 't4',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: t('task.captureSource'),
        statusText: t('task.pendingPeerReview'),
        statusDotColor: '#0052CC',
        priority: 'Medium' as 'High' | 'Medium',
      },
      {
        id: 't5',
        category: 'ISSUE',
        org: 'Ministry of Health',
        captureSource: t('task.captureSource'),
        statusText: t('task.pendingPeerReview'),
        statusDotColor: '#0052CC',
        priority: 'Medium' as 'High' | 'Medium',
      },
    ],
    [t],
  );

  return (
    <div className='flex flex-col gap-5'>
      {/* Tabs + Actions bar */}
      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-end gap-6'>
          <div
            onClick={() => setTab('my')}
            className='relative cursor-pointer pb-2 text-[14px]'
            style={{
              fontFamily: 'Rubik',
              fontWeight: 600,
              color: tab === 'my' ? '#4166F5' : '#484D6C',
            }}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setTab('my')}
          >
            {t('dashboard.myTasks')}
            {tab === 'my' && (
              <span className='absolute bottom-0 left-0 h-[2px] w-full bg-[#4166F5]' />
            )}
          </div>

          <div className='h-[24px] w-[1px] bg-[#DBDBDB]' />

          <div
            onClick={() => setTab('sent')}
            className='cursor-pointer pb-2 text-[14px]'
            style={{
              fontFamily: 'Rubik',
              fontWeight: 400,
              color: tab === 'sent' ? '#4166F5' : '#484D6C',
            }}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setTab('sent')}
          >
            {t('dashboard.mySentRequests')}
          </div>

          <div className='h-[24px] w-[1px] bg-[#DBDBDB]' />

          <div
            onClick={() => setTab('unassigned')}
            className='flex cursor-pointer items-center gap-2 pb-2 text-[14px]'
            style={{
              fontFamily: 'Rubik',
              fontWeight: 400,
              color: tab === 'unassigned' ? '#4166F5' : '#484D6C',
            }}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setTab('unassigned')}
          >
            {t('dashboard.unassignedTasks')}
            <Tag
              className='!m-0 !h-[16px] !rounded-[4px] !border-0 !px-[8px]'
              style={{
                background: '#DDE4FF',
                color: '#4166F5',
                fontFamily: 'DM Sans',
                fontWeight: 700,
                fontSize: 10,
                lineHeight: '16px',
              }}
            >
              4
            </Tag>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div
            className='flex cursor-pointer items-center gap-1 !px-0 text-[#4166F5]'
            style={{
              fontFamily: 'Rubik',
              fontWeight: 500,
              fontSize: 12,
            }}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && {}}
          >
            <AppstoreOutlined />
            <span>{t('dashboard.changeView')}</span>
          </div>

          <div className='h-[24px] w-[1px] bg-[#DBDBDB]' />

          <div
            className='flex cursor-pointer items-center gap-1 !px-0 text-[#4166F5]'
            style={{
              fontFamily: 'Rubik',
              fontWeight: 500,
              fontSize: 12,
            }}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && {}}
          >
            <SortAscendingOutlined />
            <span>{t('dashboard.sortBy')}</span>
          </div>

          <div className='h-[24px] w-[1px] bg-[#DBDBDB]' />

          <div
            className='flex h-[32px] cursor-pointer items-center justify-center rounded-[5px] border border-[#4166F5] px-3 text-[#4166F5]'
            style={{ fontFamily: 'Rubik', fontWeight: 500, fontSize: 12 }}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && {}}
          >
            {t('dashboard.advancedFilter')}
          </div>
        </div>
      </div>

      {/* List */}
      <div className='flex flex-col gap-2'>
        {tasks.map((t) => (
          <TaskRow key={t.id} item={t} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;

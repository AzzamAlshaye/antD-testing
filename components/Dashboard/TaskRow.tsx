import React from 'react';
import { Tag } from 'antd';
import { ArrowUpOutlined, LineOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import type { TaskItem } from '@interfaces/IDashboard';

type Props = {
  item: TaskItem;
};

const priorityStyles: Record<
  TaskItem['priority'],
  { label: string; icon: React.ReactNode }
> = {
  High: { label: 'High', icon: <ArrowUpOutlined className='text-[#EA7100]' /> },
  Medium: { label: 'Medium', icon: <LineOutlined className='text-[#E38500]' /> },
};

const categoryStyles: Record<
  TaskItem['category'],
  { dot: string; label: string }
> = {
  ISSUE: { dot: '#F69F0A', label: 'ISSUE' },
  SUPPORT: { dot: '#B4E396', label: 'SUPPORT' },
};

const TaskRow: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();
  const pr = priorityStyles[item.priority];
  const cat = categoryStyles[item.category];

  const priorityLabel =
    item.priority === 'High' ? t('task.high') : t('task.medium');
  const categoryLabel =
    item.category === 'ISSUE' ? t('task.issue') : t('task.support');

  return (
    <div className='relative w-full rounded-[6px] bg-white shadow-card'>
      <div className='flex items-center justify-between px-6 py-4'>
        <div className='flex min-w-0 items-center gap-4'>
          <div className='flex items-center gap-2'>
            <span
              className='h-[14px] w-[14px] rounded-[3.5px]'
              style={{ background: cat.dot }}
            />
            <span className='font-inter text-[12px] uppercase tracking-[0.354785px] text-text-500 underline'>
              {categoryLabel}
            </span>
          </div>

          <div className='h-[28px] w-[1px] bg-[#F4F4F4]' />

          <span className='truncate font-rubik text-[14px] text-[#0E1A2F]'>
            {item.org}
          </span>

          <div className='h-[28px] w-[1px] bg-[#F4F4F4]' />

          <span className='font-inter text-[12px] text-[#83868A]'>
            {item.captureSource}
          </span>

          <div className='h-[28px] w-[1px] bg-[#F4F4F4]' />

          <div className='flex items-center gap-2'>
            <span
              className='h-[8px] w-[8px] rounded-full'
              style={{ background: item.statusDotColor }}
            />
            <span className='font-inter text-[12px] text-[#83868A]'>
              {item.statusText}
            </span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Tag className='!m-0 !border-0 !bg-transparent !p-0 !font-rubik !text-[10.5px] !text-text-500'>
            <span className='inline-flex items-center gap-2'>
              {pr.icon}
              {priorityLabel}
            </span>
          </Tag>

          <RightOutlined className='text-[14px] text-text-900' />
        </div>
      </div>

      {item.id === 't1' && (
        <div className='px-6 pb-4 pt-0'>
          <div className='font-rubik text-[14px] text-[#0E1A2F]'>
            {t('dashboard.description')}
          </div>
          <div className='font-inter text-[12px] leading-[18px] text-[#83868A]'>
            {t('dashboard.descriptionText')}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskRow;

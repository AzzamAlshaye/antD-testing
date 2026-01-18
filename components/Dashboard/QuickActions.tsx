import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  PlusCircleOutlined,
  ReloadOutlined,
  AppstoreOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

/** ✅ export the type directly (so named import works) */
export type QuickActionItem = {
  key: string;
  label: string;
  icon: 'plus' | 'refresh' | 'layers';
};

type Props = {
  title: string;
  actions: QuickActionItem[];
};

const iconMap: Record<QuickActionItem['icon'], React.ReactNode> = {
  plus: <PlusCircleOutlined style={{ fontSize: 24, color: '#4166F5' }} />,
  refresh: <ReloadOutlined style={{ fontSize: 24, color: '#4166F5' }} />,
  layers: <AppstoreOutlined style={{ fontSize: 24, color: '#4166F5' }} />,
};

const QuickActions: React.FC<Props> = ({ title, actions }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='min-w-0'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='text-[16px] font-bold' style={{ fontFamily: 'Rubik' }}>
          {title}
        </div>

        <div
          className='flex cursor-pointer items-center gap-1 !px-0 text-[#0052CC]'
          style={{ fontFamily: 'Inter', fontSize: 12 }}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && {}}
        >
          <EditOutlined />
          <span>{t('dashboard.customise')}</span>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {actions.map((a) => (
          <div
            key={a.key}
            className='flex h-[124px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[8px] border border-[#F2F2F2] bg-white shadow-[0px_6px_20px_rgba(182,182,182,0.1)]'
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && {}}
            onClick={() => navigate('/complain')}
          >
            {iconMap[a.icon]}
            <span
              className='text-[12px] font-medium text-[#4166F5]'
              style={{ fontFamily: 'Inter' }}
            >
              {a.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

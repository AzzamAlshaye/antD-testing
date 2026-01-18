import React from 'react';
import { ArrowUpOutlined, RightOutlined } from '@ant-design/icons';

export type RecentlyItem = {
  id: string;
  org: string;
  type: string;
  reporter: string;
  priority: string;
};

type Props = {
  title: string;
  items: RecentlyItem[];
};

const RecentlyVisited: React.FC<Props> = ({ title, items }) => {
  return (
    <div className='min-w-0'>
      <div
        className='mb-4 text-[16px] font-bold'
        style={{ fontFamily: 'Rubik' }}
      >
        {title}
      </div>

      <div className='grid gap-3'>
        {items.map((it) => (
          <div
            key={it.id}
            className='flex h-[52px] items-center justify-between rounded-[6px] bg-white px-4 shadow-[0px_4px_24px_rgba(182,182,182,0.13)]'
          >
            <div
              className='flex items-center gap-3 text-[13px]'
              style={{ fontFamily: 'Rubik' }}
            >
              <span className='text-[#0E1A2F]'>{it.org}</span>
              <span className='h-7 w-px bg-[#F4F4F4]' />
              <span className='text-[#0E1A2F]'>{it.type}</span>
              <span className='h-7 w-px bg-[#F4F4F4]' />
              <span
                className='text-[11px] text-[#83868A]'
                style={{ fontFamily: 'Inter' }}
              >
                {it.reporter}
              </span>
            </div>

            <div className='flex items-center gap-4'>
              <div
                className='flex items-center gap-1 text-[10.5px] text-[#5E6C84]'
                style={{ fontFamily: 'Rubik' }}
              >
                <ArrowUpOutlined style={{ color: '#EA7100' }} />
                {it.priority}
              </div>
              <RightOutlined className='text-[#0A0E14]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyVisited;

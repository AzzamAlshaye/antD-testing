import React from 'react';
import type { DashboardHeroCard } from '@interfaces/IDashboard';
import DonutChart from './DonutChart';

type Props = {
  cards: DashboardHeroCard[];
};

export default function DashboardHero({ cards }: Props): React.JSX.Element {
  return (
    <div className='w-full'>
      <div className='mt-3 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {cards.map((card) => (
          <div
            key={`${card.donut.label}-${card.rows.length}`}
            className='rounded-[10px] bg-white p-6 shadow-card'
          >
            <div className='flex items-center gap-6'>
              <DonutChart
                mode={card.donut.mode}
                value={card.donut.value}
                label={card.donut.label}
                colors={card.donut.colors}
                size={card.donut.size}
                strokeWidth={card.donut.strokeWidth}
              />

              <div className='flex-1 divide-y divide-[#F0F0F0]'>
                {card.rows.map((row) => (
                  <Row
                    key={`${row.label}-${row.value}`}
                    label={row.label}
                    value={row.value}
                    dot={row.dot}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
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
      <div className='flex items-center gap-2 text-text-700'>
        <span
          className='h-[6px] w-[6px] rounded-full'
          style={{ background: dot }}
        />
        <span className='font-rubik'>{label}</span>
      </div>

      <div className='font-rubik font-semibold text-text-700'>{value}</div>
    </div>
  );
}

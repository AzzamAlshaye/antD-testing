import { StarIcon } from '@assets/svg';
import { Collapse } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupCard } from './GroupCard';
import { GroupSearchCriteria } from '@components';

export const SearchGroup: FC = () => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState('1');

  return (
    <>
      <Collapse
        defaultActiveKey={['recent']}
        bordered={false}
        expandIconPlacement='end'
        className='bg-colorGrayMain rounded-lg'
        items={[
          {
            key: 'recent',
            label: (
              <div className='flex items-center'>
                <div className='bg-primary w-6 h-6 flex items-center justify-center rounded-full'>
                  <StarIcon className='w-3.5 h-3.5 text-white' />
                </div>
                <span className='ms-2.5 font-semibold text-sm text-black'>
                  {t('GROUPS.RECENTLY_CREATED')}
                </span>
              </div>
            ),
            children: (
              <div className='space-y-4 font-normal'>
                {/* groups list goes here */}
                <GroupCard
                  id='1'
                  title='Group 1'
                  description='This group has the types of bug 23 with the issue'
                  createdBy='User name'
                  createdAt='20/12/2024'
                  selectable
                  selected={selectedId === '1'}
                  onSelect={setSelectedId}
                />

                <GroupCard
                  id='2'
                  title='Group 2'
                  description='This group has the types of bug 23 with the issue'
                  createdBy='User name'
                  createdAt='20/12/2024'
                  selectable
                  selected={selectedId === '2'}
                  onSelect={setSelectedId}
                />
                {/* 
                <GroupCard
                  id='3'
                  title='Readonly Group'
                  description='Used as a normal card'
                  createdBy='Admin'
                  createdAt='01/01/2025'
                /> */}
              </div>
            ),
          },
        ]}
      />

      <GroupSearchCriteria />
    </>
  );
};

import { FC } from 'react';
import { Input, Select, Button, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

export const GroupSearchCriteria: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='space-y-3 my-8 '>
      {/* Title */}
      <div className='font-semibold text-base'>{t('GROUPS.OR_SEARCH')}</div>

      {/* Search Row */}
      <div className='bg-colorGrayMain p-3.5 rounded-lg my-4 font-normal flex items-center gap-2'>
        <Input placeholder={t('GROUPS.SEARCH_FILTER')} className='flex-1' />

        <Input placeholder={t('GROUPS.CONTAIN')} className='w-32' />

        <Input placeholder={t('GROUPS.ENTER_VALUE')} className='flex-1' />

        <Button
          type='primary'
          className={'rounded-full w-7 '}
          icon={<PlusOutlined />}
        />
      </div>

      {/* Add another criteria */}
      <Button type='link' className='px-0 text-primary' icon={<PlusOutlined />}>
        {t('GROUPS.ADD_CRITERIA')}
      </Button>
    </div>
  );
};

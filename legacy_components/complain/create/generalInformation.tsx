import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { EmptyState, ExpandIcon } from '@assets/svg';
import { GroupModal } from '@components';
import { Button, Divider, Input, Select, Space } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const GeneralInformation: FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [customersItems, setCustomersItems] = useState([
    'Customer 1',
    'Customer 2',
    'Customer 3',
  ]);
  const [newCustomer, setNewCustomer] = useState('');
  const addCustomerItem = (e: React.MouseEvent) => {
    e?.preventDefault();
    if (!newCustomer) return;
    setCustomersItems([...customersItems, newCustomer]);
    setNewCustomer('');
  };

  return (
    <>
      {/* General Information */}
      <div className={'white-panel py-8 px-5 mb-5'}>
        <div className={'text-xl text-primaryDark font-semibold mb-10'}>
          {t('COMPLAINS.GENERAL_INFORMATION')}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8'>
          {/* Customer */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm'>{t('COMPLAINS.CUSTOMER')}</label>
            <Select
              size='large'
              placeholder={t('COMMON.SELECT')}
              showSearch
              options={customersItems.map((item) => ({
                label: item,
                value: item,
              }))}
              popupRender={(menu) => (
                <>
                  {menu}
                  <Divider className='my-2' />
                  <Space className='px-1 pb-2 flex items-center justify-between'>
                    <Input
                      placeholder={t('COMPLAINS.NEW_CUSTOMER')}
                      value={newCustomer}
                      onChange={(e) => setNewCustomer(e.target.value)}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button
                      className={'text-primary'}
                      type='text'
                      icon={<PlusOutlined />}
                      onClick={addCustomerItem}
                    ></Button>
                  </Space>
                </>
              )}
            />
          </div>

          {/* Capture Source */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm'>{t('COMPLAINS.CAPTURE_SOURCE')}</label>
            <Select
              placeholder={t('COMMON.SELECT')}
              size='large'
              options={[
                { value: 'source1', label: 'source 1' },
                { value: 'source2', label: 'source 2' },
              ]}
            />
          </div>

          {/* Seasons (Optional) */}
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <label className='text-sm'>{t('COMPLAINS.SEASONS')}</label>
              <span className='text-xs text-gray-400'>
                {t('COMMON.OPTIONAL')}
              </span>
            </div>
            <Select
              placeholder={t('COMMON.SELECT')}
              size='large'
              allowClear
              options={[
                { value: 'seasons1', label: 'seasons 1' },
                { value: 'seasons2', label: 'seasons 2' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Group Info */}
      <div className={'white-panel py-8 px-5 mb-5'}>
        <div className={'text-xl text-primaryDark font-semibold mb-10'}>
          {t('COMPLAINS.GROUP_INFO')}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8'>
          <div>
            <div className='flex items-center justify-between mb-2'>
              <label className='text-sm'>{t('COMPLAINS.GROUP_NAME')}</label>
              <span className='text-xs text-gray-400'>
                {t('COMMON.OPTIONAL')}
              </span>
            </div>

            {/* Fake input (clickable) */}
            <Input
              size='large'
              placeholder={t('COMPLAINS.SEARCH_FOR_GROUP')}
              readOnly
              onClick={() => setOpen(true)}
              suffix={<ExpandIcon className='w-3 h-3' />}
              className='cursor-pointer'
            />
          </div>
        </div>
      </div>

      <div className={'white-panel py-8 px-5 '}>
        <div className={'text-xl text-primaryDark font-semibold mb-10'}>
          {t('COMPLAINS.COMPLAIN_EVENT')}
        </div>

        <div className={'flex flex-col  justify-center items-center'}>
          <EmptyState className={'w-24 h-24'} />
          <span className={'font-semibold text-base my-6'}>
            {t('COMPLAINS.NO_EVENTS_MESSAGE')}
          </span>

          <Button
            type='primary'
            size={'large'}
            className={'py-5'}
            onClick={() => ({})}
          >
            {t('COMPLAINS.ADD')}
          </Button>
        </div>
      </div>

      <GroupModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

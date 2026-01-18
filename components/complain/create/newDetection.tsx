import { Radio } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const options = [
  { label: 'Issue', value: 'issue' },
  { label: 'IC/IB', value: 'ic_ib' },
  { label: 'R.rule', value: 'rrule' },
  { label: 'Generic', value: 'generic' },
];
export const NewDetection: FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  return (
    <div className={'white-panel py-7 px-5 '}>
      <div className={'text-2xl text-primaryDark font-medium mb-7'}>
        {t('COMPLAINS.COMPLAIN_EVENT')}
      </div>
      <p className={'text-sm'}>{t('COMPLAINS.ISSUE_COMPLAIN_FOR')}</p>
      <Radio.Group
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6'
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`
      flex items-center gap-3 cursor-pointer
      rounded-lg border border-solid px-4 py-6 transition-all
      ${
        value === option.value
          ? 'border-primary bg-colorBlueLightBg'
          : 'border-colorGrayBorder'
      }
    `}
          >
            <Radio value={option.value} />
            <span className='font-medium text-sm'>{option.label}</span>
          </label>
        ))}
      </Radio.Group>
    </div>
  );
};

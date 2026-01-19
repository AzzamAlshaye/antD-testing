import { PulseLogo, SiteLogo } from '@assets/svg';
import { Divider, Layout } from 'antd';
import { useTranslation } from 'react-i18next';
const { Footer } = Layout;

export const CustomFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <Footer className={'bg-white px-10 py-8 '}>
      <div className={'flex justify-between items-center'}>
        <div className={'flex  gap-10'}>
          <PulseLogo className={'w-16 h-5'} />
          <span>{t('FOOTER.COPYRIGHT_TEXT', { year: currentYear })}</span>
        </div>

        <div className='flex items-center gap-5'>
          <span className={'text-[#5D6468] font-bold text-xs'}>LOGO</span>
          <span className='h-6 w-[2px] bg-[#E0E0E0] '></span>

          <SiteLogo className={'w-20 h-6'} />
        </div>
      </div>
    </Footer>
  );
};

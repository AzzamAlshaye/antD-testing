import { ArtIcon, LargeArtIcon, PulseLogoWhite, SearchIcon } from '@assets/svg';
import { useRTL } from '@hooks/useIsRTL';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Conditional, Else, If } from '../Conditional';

export const CustomHeader = () => {
  const { t, i18n } = useTranslation();
  const { isRTL } = useRTL();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={'bg-primaryDark overflow-hidden relative'}>
      <Conditional>
        <If isTrue={isHome}>
          <LargeArtIcon
            className={`
          absolute top-0
          h-full w-48
          ${isRTL ? 'left-0 scale-x-[-1]' : 'right-0'}
          z-0
        `}
          />
        </If>
        <Else>
          <ArtIcon
            className={`
          absolute top-0
          h-full w-28
          ${isRTL ? 'left-0 scale-x-[-1]' : 'right-0'}
          z-0
        `}
          />
        </Else>
      </Conditional>
      <div
        className={`w-full py-6  px-10 flex justify-between  text-white  ${isHome ? 'min-h-80 items-start' : 'items-center'}`}
      >
        <div className={'flex items-center gap-10'}>
          <PulseLogoWhite className={'w-20 h-6 me-4'} />
          <Link to={'#'}>{t('NAV.HOME')}</Link>
          <Link to={'#'}>{t('NAV.BACKLOG')}</Link>
          <Link to={'#'}>{t('NAV.SEASONS')}</Link>
          <Link to={'#'}>{t('NAV.CUSTOMERS')}</Link>
          <Link to={'#'}>{t('NAV.SYSTEM_MANAGEMENT')}</Link>
        </div>

        <div className={'flex items-center gap-4'}>
          <span className={' flex items-center gap-2 '}>
            <SearchIcon className={'w-5 h-5'} />
            <span className={''}>{t('COMMON.SEARCH')}</span>
          </span>
          <span className='h-9 w-px bg-white '></span>

          <span
            className={'mx-2 cursor-pointer'}
            onClick={() => i18n.changeLanguage(isRTL ? 'en' : 'ar')}
          >
            {isRTL ? 'EN' : 'AR'}
          </span>
          <span className='h-9 w-px bg-white '></span>

          <span className='flex items-center gap-3 cursor-pointer'>
            {/* Avatar */}
            <span className='w-8 h-8 rounded-full bg-colorUserAvatarBg text-black text-xs font-medium flex items-center justify-center'>
              AA
            </span>

            {/* Username */}
            <span className='font-medium whitespace-nowrap text-xs'>
              Ahmed Alabdullah
            </span>

            {/* Dropdown arrow (optional) */}
            <svg
              className='w-4 h-4 opacity-70'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

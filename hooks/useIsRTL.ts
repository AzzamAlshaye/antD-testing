import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useRTL = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [isRTL, setIsRTL] = useState(language === 'ar');

  useEffect(() => {
    setIsRTL(language === 'ar');
  }, [language]);

  return { isRTL };
};

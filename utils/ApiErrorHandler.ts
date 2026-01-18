import { AxiosError } from 'axios';
import { t } from 'i18next';
import { toast } from '@site/designs';

const handleApiError = (error: any) => {
  const { lang, errorMessage } = {
    lang: error?.config?.headers['Accept-Language'],
    errorMessage:
      error?.response?.data?.message || error?.response?.data?.detail,
  };
  if (!navigator.onLine) {
    if (lang === 'ar') {
      toast.warning(t('الرجاء التحقق من الانترنت الخاص بك') as string);
    } else {
      toast.warning(t('Please Check Your Internet Connection') as string);
    }
  } else if (errorMessage) {
    toast.error(errorMessage);
  } else {
    if (lang === 'ar') {
      toast.error(t('مشكلة في الخادم') as string);
    } else {
      toast.error(t('Error Occurred. Please contact Administrator') as string);
    }
  }
};
export { handleApiError };

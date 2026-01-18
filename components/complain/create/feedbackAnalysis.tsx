import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const FeedbackAnalysis: FC = () => {
  const { t } = useTranslation();

  return <div className={'white-panel py-8 px-5 mb-5'}>Feedback Analysis </div>;
};

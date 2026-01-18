import {
  Conditional,
  FeedbackAnalysis,
  GeneralInformation,
  If,
  Investigation,
  NewDetection,
  ResponseCreation,
  ShareWithCustomer,
} from '@components';
import { Button, Segmented, Steps } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Complain: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const isFirstStep = currentStep === 0;

  const steps = [
    {
      key: 'new-detection',
      title: t('COMPLAINS.NEW_DETECTION'),
      content: (
        <>
          <NewDetection />
        </>
      ),
    },
    {
      key: 'general-info',
      title: t('COMPLAINS.GENERAL_INFORMATION'),
      content: <GeneralInformation />,
    },
    {
      key: 'investigation',
      title: t('COMPLAINS.INVESTIGATION'),
      content: <Investigation />,
    },
    {
      key: 'response',
      title: t('COMPLAINS.RESPONSE_CREATION'),
      content: <ResponseCreation />,
    },
    {
      key: 'share',
      title: t('COMPLAINS.SHARE_WITH_CUSTOMER'),
      content: <ShareWithCustomer />,
    },
    {
      key: 'feedback',
      title: t('COMPLAINS.FEEDBACK_ANALYSIS'),
      content: <FeedbackAnalysis />,
    },
  ];

  return (
    <div className=''>
      <div className='bg-white py-6 px-10'>
        {/* Complain Header */}
        <div className='text-4xl font-medium mt-4'>
          {isFirstStep
            ? t('COMPLAINS.NEW_COMPLAIN')
            : t('COMPLAINS.DETECTION_DETAILS')}
        </div>
      </div>

      <div className='px-10'>
        {/* Creation Mode */}
        <Conditional>
          <If isTrue={isFirstStep}>
            <Segmented
              className='mt-6'
              options={[
                t('COMPLAINS.MANUAL_CREATION'),
                t('COMPLAINS.UPLOAD_TRAFFIC_FILE'),
              ]}
            />
          </If>
        </Conditional>
        <div className={'flex gap-10 items-start w-full mt-7'}>
          {/* Steps Content */}
          <div className={'flex-1'}>
            {steps[currentStep].content}
            <div className={'flex items-center justify-between w-full mt-3'}>
              <Button
                color={'primary'}
                variant={'outlined'}
                size={'large'}
                className='mt-6'
                onClick={() =>
                  currentStep === 0
                    ? navigate('/')
                    : setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
                }
              >
                {isFirstStep ? t('COMMON.CANCEL') : t('COMMON.BACK')}
              </Button>

              <div className={'mt-6'}>
                {!isFirstStep && (
                  <Button
                    color={'primary'}
                    variant={'outlined'}
                    size={'large'}
                    onClick={() => ({})}
                  >
                    {t('COMMON.SAVE')}
                  </Button>
                )}
                <Button
                  type='primary'
                  size={'large'}
                  className='ms-4'
                  onClick={() =>
                    setCurrentStep((prev) =>
                      prev < steps.length - 1 ? prev + 1 : prev,
                    )
                  }
                >
                  {t('COMMON.NEXT')}
                </Button>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className='bg-colorGrayMain rounded-xl p-6 w-72'>
            <Steps
              className={'space-y-10'}
              direction='vertical'
              current={currentStep}
              items={steps.map((step) => ({
                title: step.title,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import { PulseLargeLogo, PulseLogo } from '@assets/svg';
import { Segmented, Button, Form, Input } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='relative flex min-h-screen '>
      {/* <div className='absolute top-4 right-4'>
        <Segmented
          options={[
            { label: 'EN', value: 'en' },
            { label: 'AR', value: 'ar' },
          ]}
          onChange={(value) => i18n.changeLanguage(value as string)}
          defaultValue={i18n.language}
        />
      </div> */}

      {/* <!-- Blue section --> */}
      <div className='w-1/3 bg-primaryDark'></div>

      {/* <!-- White section --> */}
      <div className='w-2/3 bg-colorMainWhite flex flex-col  items-center justify-center'>
        {/* <!-- Login card here --> */}
        <div className='bg-white shadow-lg rounded-2xl px-16 py-12 flex flex-col gap-6'>
          <PulseLogo className='w-32 h-10 mb-10' />
          <div className={'text-3xl font-medium'}>
            {t('LOGIN.LOGIN_GREETING')}
          </div>

          <Form
            layout='vertical'
            className='w-full text-start'
            requiredMark={false}
          >
            <span className='text-colorBlacklight text-base'>
              {' '}
              {t('LOGIN.EMAIL')}
            </span>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input
                size='large'
                className={
                  'py-3 pe-36 rounded-md placeholder:text-colorGray50Dark placeholder:text-base'
                }
                placeholder='Example@mail.com'
              />
            </Form.Item>
            <span className='text-colorBlacklight text-base'>
              {' '}
              {t('LOGIN.PASSWORD')}
            </span>

            <Form.Item
              name='password'
              className={'mb-0'}
              rules={[
                { required: true, message: 'Please enter your password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
            >
              <Input
                size='large'
                className='py-3 pe-36 rounded-md leading-none   placeholder:text-colorGray50Dark placeholder:text-base'
                placeholder='*************'
                type='password'
              />
            </Form.Item>

            <Link
              to='#'
              className='text-primaryDark underline text-sm mt-1 mb-6 block'
            >
              {t('LOGIN.FORGET_PASSWORD')}
            </Link>

            <div className={'flex justify-center'}>
              <Button
                type='primary'
                size='large'
                htmlType='submit'
                className='mt-6 w-5/6 py-6 font-medium text-base'
                onClick={() => navigate('/')}
              >
                {t('LOGIN.LOGIN')}
              </Button>
            </div>
          </Form>
        </div>
      </div>
      {/* <!-- SVG will live here --> */}
      <PulseLargeLogo
        className='
    absolute bottom-0
    start-0
    rtl:scale-x-[-1]
    w-[45vw] max-w-[50vw]
    h-auto aspect-square max-h-full
  '
      />
    </div>
  );
};

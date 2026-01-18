import { Loading } from '@components';
import { theme } from '@config';
import { router } from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const Providers = () => {
  const { i18n } = useTranslation();
  const { dir, language } = i18n;

  useEffect(() => {
    document.body.dir = dir(language);
  }, [language]);
  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider direction={i18n.dir(i18n.language)} theme={theme}>
          <>
            <RouterProvider router={router} />

            {/* <ReactQueryDevtools /> */}
          </>
        </ConfigProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

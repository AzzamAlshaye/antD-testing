import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/Layout';
import { paths } from './paths';
import Kit from '@pages/kit';
import { RouteGuard } from './RouteGuard';
import Home from '@pages/Home';
import { Complain } from '@pages/Complain';

export const router = createBrowserRouter([
  {
    path: paths.home.pathname,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          crumb: () =>
            ({
              title: paths.home.breadcrumb,
            }) as BreadcrumbItemType,
        },
      },
      {
        path: paths.complain.pathname,
        element: <Complain />,
        handle: {
          crumb: () =>
            ({
              title: paths.complain.breadcrumb,
            }) as BreadcrumbItemType,
        },
      },
      {
        path: paths.test.pathname,
        element: <RouteGuard requireAuth={false} component={<Kit />} />,
        handle: {
          crumb: () =>
            ({
              title: paths.test.breadcrumb,
            }) as BreadcrumbItemType,
        },
        children: [
          {
            path: paths.child_test?.pathname as string,
            element: <Kit />,
            handle: {
              crumb: () =>
                ({
                  title: paths.child_test?.breadcrumb,
                }) as BreadcrumbItemType,
            },
          },
        ],
      },
    ],
  },
]);

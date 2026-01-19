import { AllPaths } from '@interfaces/IPaths';
import { paths } from '../../routes/paths';
import { Layout, Menu, theme } from 'antd';
import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CustomFooter } from './footer';
import { CustomHeader } from './header';
import { useTranslation } from 'react-i18next';
import { CustomBreadcrumbs } from './customBreadcrumb';

const { useToken } = theme;
const { Footer, Content } = Layout;

interface MainLayoutProps {
  children: ReactElement;
}

interface routeState {
  hideLayout?: boolean;
}

export const MainLayout = () => {
  const { token } = useToken();
  const { t } = useTranslation();
  const navigation = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const { pathname, state } = useLocation();
  const { hideLayout } = (state as routeState) || false;

  const selectedItem = (item: string) => {
    if (item === '/') {
      setSelectedMenuItem(paths?.home.pathname);
      return;
    }

    Object.keys(paths)?.forEach((k) => {
      if (paths[k as AllPaths].pathname.includes(item)) {
        setSelectedMenuItem(paths[k as AllPaths].pathname);
      }
    });
  };
  useEffect(() => {
    selectedItem(pathname === '/' ? pathname : pathname.replace('/', ''));
  }, [pathname]);

  if (hideLayout) {
    return (
      <Layout>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Layout>
        <CustomHeader />
        <CustomBreadcrumbs />
        <Content className={' bg-colorMainWhite flex flex-col'}>
          <Outlet />
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
};

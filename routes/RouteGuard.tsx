import { JSX, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Navigate, useLocation } from 'react-router-dom';
import { paths } from './paths';

interface RouteGuardProps {
  component: JSX.Element;
  title?: string;
  requireAuth?: boolean;
  allowAccess?: boolean;
}

export const RouteGuard = ({
  component,
  title,
  allowAccess = true,
  requireAuth = true,
}: RouteGuardProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    import.meta.env.DEV && console.log('allowAccess', allowAccess);
  }, [allowAccess]);

  if (!allowAccess) {
    return <Navigate to={paths.page404.pathname} replace />;
  }

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        {title && <title>{t(title)}</title>}
      </Helmet>
      {component}
    </>
  );
};

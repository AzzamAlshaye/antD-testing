import { Paths } from '@interfaces/IPaths';

const HOME_BASE = '/';

export const paths: Paths = {
  home: {
    title: 'ROUTER.HOME',
    pathname: HOME_BASE,
    breadcrumb: 'ROUTER.HOME',
  },

  complain: {
    title: 'ROUTER.COMPLAIN',
    pathname: `/complain`,
    breadcrumb: 'ROUTER.COMPLAIN',
  },
  test: {
    title: 'ROUTER.MONTHLY_KIT',
    pathname: `/monthly-kit`,
    breadcrumb: 'ROUTER.MONTHLY_KIT',
  },
  child_test: {
    title: 'ROUTER.CREATE',
    pathname: `/monthly-kit/create`,
    breadcrumb: 'ROUTER.CREATE',
  },
  page404: {
    pathname: '/404',
    breadcrumb: 'ROUTER.PAGE_404',
    title: 'ROUTER.PAGE_404',
  },
};

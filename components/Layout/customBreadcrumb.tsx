import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRTL } from '@hooks/useIsRTL';
import { Breadcrumb } from 'antd';
import {
  BreadcrumbProps,
  BreadcrumbItemType,
} from 'antd/es/breadcrumb/Breadcrumb';
import { useTranslation } from 'react-i18next';
import { useMatches, Link } from 'react-router-dom';

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

interface Match extends Omit<
  ArrayElement<ReturnType<typeof useMatches>>,
  'handle'
> {
  handle: {
    crumb: (data: unknown) => BreadcrumbItemType;
  };
}
export const CustomBreadcrumbs = () => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();
  const matches: Match[] = useMatches() as Match[];
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data))
    .map((crumb) => {
      return {
        ...crumb,
        title: t(crumb.title as string),
      };
    });

  const handleGoBack = (length: number, index: number) => {
    let path = '';
    for (let i = 0; i < length - index; i++) {
      path += '../';
    }
    return path;
  };

  const itemRender: BreadcrumbProps['itemRender'] = (
    route,
    params,
    routes,
    paths,
  ) => {
    const last = routes.indexOf(route) === routes.length - 1;
    const first = routes.indexOf(route) === 0;
    const newRoute = route as BreadcrumbItemType;
    return last ? (
      <span className='text-primary'>{newRoute.title as string}</span>
    ) : (
      <Link
        to={handleGoBack(routes.length, routes.indexOf(route) + 1)}
        relative={'path'}
        className='text-[#595959] hover:bg-transparent hover:text-black'
      >
        {first && isRTL ? (
          <RightOutlined className={'me-1'} />
        ) : (
          <LeftOutlined className={'me-1'} />
        )}
        {newRoute.title as string}
      </Link>
    );
  };

  return crumbs.length > 1 ? (
    <div className={' px-7 py-7'}>
      <Breadcrumb
        items={crumbs}
        separator={<span className={'text-[#595959]'}> / </span>}
        itemRender={itemRender}
      />
    </div>
  ) : null;
};

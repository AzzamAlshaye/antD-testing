export type Paths<T extends string = AllPaths, Y = PathsObj> = Record<T, Y>;

export type AllPaths = 'home' | 'complain' | 'test' | 'child_test' | 'page404';

export interface PathsObj {
  pathname: string;
  breadcrumb?: string | null;
  title: string;
}

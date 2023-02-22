import { lazy, LazyExoticComponent } from 'react';

import { CategoriesPage } from '../pages';

const HomeLazy = lazy(() => import('../pages/Home/components/HomePage'));
const NewsLazy = lazy(() => import('../pages/News/components/NewsPage'));

type JSXElement = () => JSX.Element;

export interface RoutesProps {
  path: string;
  Component: LazyExoticComponent<JSXElement> | React.FC;
}

export const routes: RoutesProps[] = [
  {
    path: 'home',
    Component: HomeLazy,
  },
  {
    path: 'search',
    Component: NewsLazy,
  },
  {
    path: 'category/:id_category',
    Component: CategoriesPage,
  },
];

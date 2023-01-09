import { CategoriesPage, HomePage, NewsPage } from '../pages';

export interface RoutesProps {
  path: string;
  Component: React.FC;
}

export const routes: RoutesProps[] = [
  {
    path: 'home',
    Component: HomePage,
  },
  {
    path: 'search',
    Component: NewsPage,
  },
  {
    path: 'category/:id_category',
    Component: CategoriesPage,
  },
];

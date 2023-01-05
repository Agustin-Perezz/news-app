import { ArticlesPage } from '../pages/Articles';
import { CategoriesPage } from '../pages/Categories';
import { HomePage } from '../pages/Home';

export interface RoutesProps {
  path: string;
  Component: React.FC;
}

export const routes: RoutesProps[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: 'search',
    Component: ArticlesPage,
  },
  {
    path: 'category',
    Component: CategoriesPage,
  },
];

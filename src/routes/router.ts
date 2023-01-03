import { ArticlesPage } from '../pages/Articles';
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
];

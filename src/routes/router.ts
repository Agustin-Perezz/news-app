import { ArticlesPage } from '../pages/Articles';

export interface RoutesProps {
  path: string;
  Component: React.FC;
}

export const routes: RoutesProps[] = [
  {
    path: 'search',
    Component: ArticlesPage,
  },
];

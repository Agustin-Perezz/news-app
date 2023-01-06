import { HomePage } from '../pages/Home';
import { NewsPage } from '../pages/News';

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
    Component: NewsPage,
  },
];

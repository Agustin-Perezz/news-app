import { NewsApp } from '../NewsApp';

export interface RoutesProps {
  path: string;
  Component: React.FC;
}

export const routes: RoutesProps[] = [
  {
    path: '/',
    Component: NewsApp,
  },
];

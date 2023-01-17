import { createContext } from 'react';

export type CategoryPropsContext = {
  activeCategoryTab: number;
  activeCategoryDrawer: string;
};

export const CategoryContext = createContext<CategoryPropsContext>(
  {} as CategoryPropsContext
);

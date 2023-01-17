import { createContext } from 'react';

export type CategoryPropsContext = {
  activeCategoryTab: number;
  activeCategoryDrawer: string;

  handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void;
};

export const CategoryContext = createContext<CategoryPropsContext>(
  {} as CategoryPropsContext
);

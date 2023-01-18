import { createContext } from 'react';
import { HandleSetTabProps } from '../../types';

export type CategoryPropsContext = HandleSetTabProps & {
  activeCategory: number;
};

export const CategoryContext = createContext<CategoryPropsContext>({} as CategoryPropsContext);

import { createContext } from 'react';
import { HandleChangeTabProps, HandleClickDrawerProps } from '../../types';

export type CategoryPropsContext = HandleChangeTabProps &
  HandleClickDrawerProps & {
    activeCategoryTab: number;
    activeCategoryDrawer: string;

    handleChangeTab: (event: React.SyntheticEvent, newValue: number) => void;
  };

export const CategoryContext = createContext<CategoryPropsContext>({} as CategoryPropsContext);

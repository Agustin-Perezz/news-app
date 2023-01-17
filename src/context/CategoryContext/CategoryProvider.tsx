import React from 'react';
import { useCacheCategory } from '../../pages/Header/hooks';
import { CategoryContext } from './CategoryContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = { activeCategoryTab: number; activeCategoryDrawer: string };

export type SetActiveCategoryProps = {
  setActiveCategory: (value: React.SetStateAction<StateProps>) => void;
};

const INIT_STATE: StateProps = {
  activeCategoryTab: 1,
  activeCategoryDrawer: 'home',
};

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  const [activeCategory, setActiveCategory] =
    React.useState<StateProps>(INIT_STATE);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setActiveCategory((prev) => ({ ...prev, activeCategoryTab: newValue }));
  };

  const handleClickDrawer = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    category: string
  ) => {
    setActiveCategory((prev) => ({ ...prev, activeCategoryDrawer: category }));
  };

  useCacheCategory({ setActiveCategory });

  return (
    <CategoryContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ ...activeCategory, handleChangeTab, handleClickDrawer }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

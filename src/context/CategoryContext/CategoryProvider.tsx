import React from 'react';
import { useCacheCategory } from '../../pages/Header/hooks';
import { CategoryContext } from './CategoryContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = { activeCategoryTab: number; activeCategoryDrawer: string };

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

  useCacheCategory();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CategoryContext.Provider value={{ ...activeCategory, handleChangeTab }}>
      {children}
    </CategoryContext.Provider>
  );
};

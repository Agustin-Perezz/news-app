import React from 'react';
import { useCacheCategory } from '../../pages/Header/hooks';
import { CategoryContext } from './CategoryContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export type SetActiveCategoryProps = {
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
};

export const CategoryProvider: React.FC<Props> = ({ children }) => {
  const [activeCategory, setActiveCategory] = React.useState(1);

  const handleSetTab = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.SyntheticEvent,
    idxCategory: number
  ) => {
    setActiveCategory(idxCategory);
  };

  useCacheCategory({ setActiveCategory });

  return (
    <CategoryContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ activeCategory, handleSetTab }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

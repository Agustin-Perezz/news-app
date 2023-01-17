import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { listCategories } from '../../pages/Header/Components';
import { useSearch } from '../../pages/Header/hooks';
import { getPreviusCategoryParameters } from '../../utilities';
import { CacheContext } from '../CacheContext';
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

  const { handleSubmit } = useSearch();
  const { cache } = useContext(CacheContext);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/search') {
      return;
    }

    const { keyCategory, idxOldCategory } =
      getPreviusCategoryParameters(pathname);
    if (keyCategory !== undefined && cache?.key === keyCategory) {
      handleSubmit({
        urlParameter: listCategories[idxOldCategory].category,
        endpoint: listCategories[idxOldCategory].endpoint,
        navigateUrl: listCategories[idxOldCategory].url,
      });
      return;
    }

    handleSubmit({
      urlParameter: listCategories[0].category,
      endpoint: listCategories[0].endpoint,
      navigateUrl: listCategories[0].url,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CategoryContext.Provider value={{ ...activeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

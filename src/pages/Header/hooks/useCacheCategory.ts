import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CacheContext } from '../../../context/CacheContext';
import { SetActiveCategoryProps } from '../../../context/CategoryContext';
import { listCategories } from '../Components/CategoriesNavBar';
import { getPreviusCategory } from '../utilities';
import { useSearch } from './useSearch';

export const useCacheCategory = ({ setActiveCategory }: SetActiveCategoryProps) => {
  const { handleSubmit } = useSearch();
  const { cache } = useContext(CacheContext);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/search') {
      return;
    }

    const { keyCategory, idxOldCategory, previusCategory } = getPreviusCategory(pathname);
    if (keyCategory !== undefined && cache?.key === keyCategory) {
      setActiveCategory(idxOldCategory);
      handleSubmit({
        ...previusCategory,
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
};

import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CacheContext } from '../../../context/CacheContext';
import { getPreviusCategoryParameters } from '../../../utilities';
import { listCategories } from '../Components/CategoriesNavBar';
import { useSearch } from './useSearch';

export const useCacheCategory = () => {
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
};

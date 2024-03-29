import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CacheContext } from '../context/CacheContext';
import { SetActiveCategoryProps } from '../context/CategoryContext';
import { getCurrentPathname, getPreviusCategory } from '../utilities';
import { useSearch } from './useSearch';

const API_KEY = process.env.REACT_APP_API_KEY;

export const useCacheCategory = ({ setActiveCategory }: SetActiveCategoryProps) => {
  const { handleSubmit } = useSearch();
  const { cache } = useContext(CacheContext);
  const locationPath = useLocation();

  React.useEffect(() => {
    const currenPathname = getCurrentPathname(locationPath);
    if (currenPathname === 'search') {
      const currentQuery = locationPath.search.substring(3, locationPath.search.length);
      handleSubmit({
        urlParameter: currentQuery,
        endpoint: `/all?api_token=${API_KEY}&search=${currentQuery}`,
        navigateUrl: `search?q=${currentQuery}`,
      });
      return;
    }

    const { keyCategory, idxOldCategory, previusCategory } = getPreviusCategory(currenPathname);
    if (keyCategory !== undefined && cache[keyCategory] !== undefined) {
      setActiveCategory(idxOldCategory);
      handleSubmit({
        ...previusCategory,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

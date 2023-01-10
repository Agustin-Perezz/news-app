import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CacheContext } from '../../../context/CacheContext';
import { getPreviusCategoryParameters } from '../../../utilities';
import { listCategories } from '../Components/CategoriesNavBar';
import { SubmitProps } from './useSearch';

type Props = {
  handleClick: ({
    navigateUrl,
    endpoint,
    urlParameter,
  }: SubmitProps) => Promise<void>;
};

export const useTab = ({ handleClick: handleSubmit }: Props) => {
  const [valueTab, setValueTab] = React.useState(1);
  const { cache } = useContext(CacheContext);

  const { pathname } = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

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

  React.useEffect(() => {
    if (pathname === '/search') {
      setValueTab(0);
    }
  }, [pathname]);

  return { valueTab, handleChange };
};

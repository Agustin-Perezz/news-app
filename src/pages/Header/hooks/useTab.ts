import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CacheContext } from '../../../context/CacheContext';
import { SubmitProps } from '../../../hooks';
import { getPreviusCategoryParameters } from '../../../utilities';
import { listCategories } from '../Components/CategoriesNavBar';

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
    const { keyCategory, oldCategoryParameters, idxOldCategory } =
      getPreviusCategoryParameters(pathname);
    if (cache?.key === keyCategory) {
      setValueTab(idxOldCategory + 1);
      handleSubmit({
        ...oldCategoryParameters,
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

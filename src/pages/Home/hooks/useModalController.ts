import React, { useContext } from 'react';
import { listCategories } from '../../../components/NavBar/CategoriesNavBar';
import { CacheContext } from '../../../context/CacheContext';
import { useSearch } from '../../../hooks';

export const useModalController = () => {
  const [open, setOpen] = React.useState(false);
  const { cache, setCache } = useContext(CacheContext);
  const { handleSubmit } = useSearch();

  const handleClickCountry = (codeCountry: string, titleCountry: string) => {
    handleSubmit({
      urlParameter: listCategories[1].category,
      navigateUrl: listCategories[1].url,
      endpoint: `${listCategories[1].endpoint}&locale=${codeCountry}`,
    });
    setCache({ key: 'country', value: titleCountry });
    setOpen(!open);
  };

  React.useEffect(() => {
    if (cache.country === undefined) {
      setOpen(true);
    }
  }, [cache.country, setOpen]);

  return { open, handleClickCountry };
};

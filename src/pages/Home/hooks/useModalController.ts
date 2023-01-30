import React, { useContext } from 'react';
import { CacheContext } from '../../../context/CacheContext';
import { listCategories } from '../../Header/Components';
import { useSearch } from '../../Header/hooks';

export const useModalController = () => {
  const [open, setOpen] = React.useState(false);
  const { cache, setCache } = useContext(CacheContext);
  const { handleSubmit } = useSearch();

  const handleClickCountry = (titleCountry: string) => {
    handleSubmit({
      urlParameter: listCategories[1].category,
      navigateUrl: listCategories[1].url,
      endpoint: `${listCategories[1].endpoint}&locale=${titleCountry}`,
    });
    setCache({ key: 'country', value: titleCountry });
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    if (cache.country === undefined) {
      setOpen(true);
    }
  }, [cache.country, setOpen]);

  return { open, onClose, handleClickCountry };
};

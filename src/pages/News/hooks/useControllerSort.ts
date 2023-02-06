import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import { useSearch } from '../../Header/hooks';
import { getSortParameters } from '../utilities';
import { CacheContext } from '../../../context/CacheContext';

export const useControllerSort = () => {
  const [optionSort, setOptionSort] = React.useState('Most Recent');

  const { cache, setCache } = useContext(CacheContext);

  const { search } = useLocation();
  const { handleSubmit } = useSearch();

  const onChange = ({ target: { value } }: SelectChangeEvent) => {
    const { sortParamaters } = getSortParameters(search, value);
    setOptionSort(value);
    handleSubmit({ ...sortParamaters });
    setCache({ key: 'option-value', value });
  };

  React.useEffect(() => {
    setOptionSort(cache['option-value'] || 'Most Recent');
  }, [cache]);

  return {
    optionSort,
    onChange,
  };
};

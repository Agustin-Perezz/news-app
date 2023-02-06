import React from 'react';
import { useLocation } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material';
import { useSearch } from '../../Header/hooks';
import { getSortParameters } from '../utilities';

export const useControllerSort = () => {
  const [optionSort, setOptionSort] = React.useState('Most Recent');

  const { search } = useLocation();
  const { handleSubmit } = useSearch();

  const onChange = ({ target: { value } }: SelectChangeEvent) => {
    const { sortParamaters } = getSortParameters(search, value);
    setOptionSort(value);
    handleSubmit({ ...sortParamaters });
  };

  return {
    optionSort,
    onChange,
  };
};

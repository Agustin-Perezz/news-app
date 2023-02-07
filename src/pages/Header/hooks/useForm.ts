import React, { useState, useContext } from 'react';
import { CacheContext } from '../../../context/CacheContext';
import { HandleSubmitProps } from '../../../types';
import { getSortParameters } from '../../../utilities';

export const useForm = ({ handleSubmit }: HandleSubmitProps) => {
  const { cache, setCache } = useContext(CacheContext);

  const [query, setQuery] = useState(cache['query-value'] || '');

  const onChange = (event: string) => {
    setQuery(event);
  };

  const onSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { sortParamaters } = getSortParameters(query, 'Most Recent');
    setCache({ key: 'option-value', value: 'Most Recent' });
    setCache({ key: 'query-value', value: query });
    handleSubmit({ ...sortParamaters });
  };

  return {
    query,

    onSubmit,
    onChange,
  };
};

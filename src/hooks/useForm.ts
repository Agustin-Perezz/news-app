import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CacheContext } from '../context/CacheContext';
import { HandleSubmitProps } from '../types';
import { getSortParameters } from '../utilities';

export const useForm = ({ handleSubmit }: HandleSubmitProps) => {
  const { cache, setCache, removePropertyCache } = useContext(CacheContext);
  const { pathname } = useLocation();

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

  React.useEffect(() => {
    if (pathname !== '/search') {
      setQuery('');
      removePropertyCache('query-value');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return {
    query,

    onSubmit,
    onChange,
  };
};

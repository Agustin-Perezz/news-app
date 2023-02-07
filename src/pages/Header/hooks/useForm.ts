import { useState, useContext } from 'react';
import { CacheContext } from '../../../context/CacheContext';
import { HandleSubmitProps } from '../../../types';
import { getSortParameters } from '../../../utilities';

export const useForm = ({ handleSubmit }: HandleSubmitProps) => {
  const [query, setQuery] = useState('');

  const onChange = (event: string) => {
    setQuery(event);
  };

  const { setCache } = useContext(CacheContext);

  const onSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { sortParamaters } = getSortParameters(query, 'Most Recent');
    setCache({ key: 'option-value', value: 'Most Recent' });
    handleSubmit({ ...sortParamaters });
  };

  return {
    onSubmit,
    onChange,
  };
};

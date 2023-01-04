import { useState } from 'react';

export const useForm = (initialState: string) => {
  const [query, setQuery] = useState(initialState);

  const reset = () => {
    setQuery(initialState);
  };

  const onChange = (event: string) => {
    setQuery(event);
  };

  return {
    query,

    onChange,
    reset,
  };
};

import { useState } from 'react';

type Event = {
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
};

export const useForm = (initialState: string) => {
  const [query, setQuery] = useState(initialState);

  const reset = () => {
    setQuery(initialState);
  };

  const onChange = ({ event }: Event) => {
    setQuery(event.target.value);
  };

  return {
    query,

    onChange,
    reset,
  };
};

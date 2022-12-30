import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Event = {
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
};

export const useForm = (initialState: string) => {
  const [query, setQuery] = useState(initialState);
  const navigate = useNavigate();

  const reset = () => {
    setQuery(initialState);
  };

  const onChange = ({ event }: Event) => {
    setQuery(event.target.value);
    navigate(`search?q=${event.target.value}`);
  };

  return {
    query,

    onChange,
    reset,
  };
};

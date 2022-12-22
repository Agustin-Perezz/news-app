import { createContext } from 'react';
import { NewsProps } from '../../types/news-props';

export type NewsContextProps = {
  dataNews?: NewsProps;
  isLoading: boolean;
  isError?: string;

  getNewsByQuery: (query: string) => void;
};

export const NewsContext = createContext<NewsContextProps>(
  {} as NewsContextProps
);

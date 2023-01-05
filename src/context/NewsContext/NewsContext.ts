import { createContext } from 'react';
import { NewsProps } from '../../types/news-props';

export type ContextTypeData = {
  data?: NewsProps[];
  isLoading: boolean;
  isError?: string;
};

export type NewsContextProps = ContextTypeData & {
  setState: React.Dispatch<React.SetStateAction<ContextTypeData>>;
};

export const NewsContext = createContext<NewsContextProps>(
  {} as NewsContextProps
);

import { createContext } from 'react';

export type CacheProps = {
  key: string;
  value: string;
};

export type CacheContextProps = {
  cache?: CacheProps;

  setCache: (cacheData: CacheProps) => void;
};

export const CacheContext = createContext<CacheContextProps>(
  {} as CacheContextProps
);

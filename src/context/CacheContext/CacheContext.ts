import { createContext } from 'react';

export type CacheParameters = {
  key: string;
  value: unknown;
};

export type CacheContextProps = {
  cache: Record<string, string>;

  setCache: (cacheData: CacheParameters) => void;
  removePropertyCache: (keyCache: string) => void;
};

export const CacheContext = createContext<CacheContextProps>({} as CacheContextProps);

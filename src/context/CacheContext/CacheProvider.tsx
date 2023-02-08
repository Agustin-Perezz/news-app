import React from 'react';
import { CacheContext, CacheParameters } from './CacheContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type CacheProps = { cache: Record<string, string> };

export const CacheProvider: React.FC<Props> = ({ children }) => {
  const [{ cache }, setState] = React.useState<CacheProps>({
    cache: JSON.parse(localStorage.getItem('NEWS_API') || '{}'),
  });

  const setCache = ({ key, value }: CacheParameters) => {
    setState({ cache: Object.assign(cache, { [key]: value }) });
  };

  const removePropertyCache = (keyCache: string) => {
    delete cache[keyCache];
    setState({ cache: Object.assign(cache) });
  };

  const currentCache = JSON.stringify(cache);
  React.useEffect(() => {
    const cacheState = JSON.stringify(cache);
    localStorage.setItem('NEWS_API', cacheState);
  }, [currentCache, cache]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CacheContext.Provider value={{ cache, setCache, removePropertyCache }}>
      {children}
    </CacheContext.Provider>
  );
};

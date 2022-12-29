import React from 'react';
import { CacheContext, CacheProps } from './CacheContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = { cache?: CacheProps };

export const CacheProvider: React.FC<Props> = ({ children }) => {
  const [{ cache }, setState] = React.useState<StateProps>({
    cache: {
      key: 'API_CACHE',
      value: localStorage.getItem('API_CACHE') || '',
    },
  });

  const setCache = (cacheData: CacheProps) => {
    setState({ cache: cacheData });
  };

  React.useEffect(() => {
    if (cache) {
      localStorage.setItem(cache.key, cache.value);
    }
  }, [cache]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};

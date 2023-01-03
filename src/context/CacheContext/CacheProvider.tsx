import React from 'react';
import { CacheContext, CacheProps } from './CacheContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = { cache?: CacheProps };

export const CacheProvider: React.FC<Props> = ({ children }) => {
  const [{ cache }, setState] = React.useState<StateProps>({
    cache: {
      ...JSON.parse(localStorage.getItem('NEWS_API') || '{}'),
    },
  });

  const setCache = (cacheData: CacheProps) => {
    setState({ cache: cacheData });
  };

  React.useEffect(() => {
    const cacheState = JSON.stringify(cache);
    localStorage.setItem('NEWS_API', cacheState);
  }, [cache]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};

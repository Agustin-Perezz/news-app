/* eslint-disable react/jsx-no-constructed-context-values */
import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CacheContext } from '../../context/CacheContext';
import { NewsContext } from '../../context/NewsContext';

type Props = PropsWithChildren<{ cache: Record<string, string>; route: string }>;

export const createWrapperEnvironment = ({ children, cache, route }: Props) => {
  const removePropertyCache = jest.fn();
  const setCache = jest.fn();
  const setState = jest.fn();
  return (
    <CacheContext.Provider value={{ cache, removePropertyCache, setCache }}>
      <NewsContext.Provider value={{ setState, isLoading: false }}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </NewsContext.Provider>
    </CacheContext.Provider>
  );
};

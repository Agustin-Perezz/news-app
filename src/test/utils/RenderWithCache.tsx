/* eslint-disable react/jsx-no-constructed-context-values */
import { render } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CacheContext } from '../../context/CacheContext';

type Props = PropsWithChildren<{
  cacheValue: Record<string, string>;
  route: string;
}>;

export const renderWithCache = ({ cacheValue, route, children }: Props) => {
  const setCache = jest.fn();
  const removePropertyCache = jest.fn();

  return render(
    <MemoryRouter initialEntries={[route]}>
      <CacheContext.Provider value={{ cache: cacheValue, setCache, removePropertyCache }}>
        {children}
      </CacheContext.Provider>
    </MemoryRouter>
  );
};

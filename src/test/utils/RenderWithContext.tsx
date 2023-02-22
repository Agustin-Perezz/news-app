/* eslint-disable react/jsx-no-constructed-context-values */
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CacheContext } from '../../context/CacheContext';
import { CategoryProvider } from '../../context/CategoryContext';
import { NewsProvider } from '../../context/NewsContext';

type Props = {
  children: JSX.Element | JSX.Element[];
  cache: Record<string, string>;
  pathname: string;
};

export const renderWhitContext = ({ children, cache, pathname }: Props) => {
  const setCache = jest.fn();
  const removePropertyCache = jest.fn();
  return render(
    <CacheContext.Provider value={{ cache, setCache, removePropertyCache }}>
      <NewsProvider>
        <MemoryRouter initialEntries={[pathname]}>
          <CategoryProvider>{children}</CategoryProvider>
        </MemoryRouter>
      </NewsProvider>
    </CacheContext.Provider>
  );
};

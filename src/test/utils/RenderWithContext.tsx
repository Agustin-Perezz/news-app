import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CacheProvider } from '../../context/CacheContext';
import { CategoryProvider } from '../../context/CategoryContext';
import { NewsProvider } from '../../context/NewsContext';

type Props = { children: JSX.Element | JSX.Element[]; pathname: string };

export const renderWhitContext = ({ children, pathname }: Props) => {
  return render(
    <CacheProvider>
      <NewsProvider>
        <MemoryRouter initialEntries={[pathname]}>
          <CategoryProvider>{children}</CategoryProvider>
        </MemoryRouter>
      </NewsProvider>
    </CacheProvider>
  );
};

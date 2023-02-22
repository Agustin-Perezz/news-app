/* eslint-disable react/jsx-no-constructed-context-values */
import { screen } from '@testing-library/react';
import { NewsContext } from '../../../../context/NewsContext';
import { NewsPage } from '../../../../pages';
import { mockArticles } from '../../../components/ui/Cards/mockArticles';
import { renderWithCache } from '../../../utils';

describe('Test in <CategoriesPage />', () => {
  const setState = jest.fn();
  function setup({ isLoading }: { isLoading: boolean }) {
    return renderWithCache({
      cacheValue: { country: 'Argentina' },
      route: '/search',
      children: (
        <NewsContext.Provider value={{ isLoading, setState, data: mockArticles }}>
          <NewsPage />
        </NewsContext.Provider>
      ),
    });
  }
  it('should match snapshot', () => {
    const { container } = setup({ isLoading: false });
    expect(container).toMatchSnapshot();
  });
  it('should show header content', () => {
    setup({ isLoading: false });
    const headerTitle = screen.getByText('Results for search.');
    const sortComponent = screen.getByRole('button');
    expect(sortComponent).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    expect(sortComponent).toHaveTextContent('Most Recent');
  });
  it('should show skeleton components when isLoading is true', () => {
    const { container } = setup({ isLoading: true });
    const skeletonComponents = container.getElementsByClassName('MuiSkeleton-rectangular');
    expect(skeletonComponents.length).toBe(5);
  });

  it('should show results for the search', () => {
    const { container } = setup({ isLoading: false });
    mockArticles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
    const cards = container.getElementsByClassName('MuiGrid-item');
    expect(cards.length).toBe(3);
  });
});

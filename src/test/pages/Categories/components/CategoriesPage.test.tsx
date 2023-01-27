import { render, screen } from '@testing-library/react';
import { NewsContext } from '../../../../context/NewsContext';
import { CategoriesPage } from '../../../../pages';
import { mockArticles } from '../../../components/ui/Cards/mockArticles';

describe('Test in <CategoriesPage />', () => {
  const setState = jest.fn();
  function setup({ isLoading }: { isLoading: boolean }) {
    const { container } = render(
      <NewsContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ isLoading, setState, data: mockArticles }}
      >
        <CategoriesPage />
      </NewsContext.Provider>
    );
    return container;
  }
  it('should match snapshot', () => {
    setup({ isLoading: false });
    expect(screen).toMatchSnapshot();
  });
  it('should show skeleton components when isLoading is true', () => {
    const container = setup({ isLoading: true });
    const skeletonComponents = container.getElementsByClassName('MuiSkeleton-rectangular');
    expect(skeletonComponents.length).toBe(5);
  });
  it('should show categories data', () => {
    const container = setup({ isLoading: false });
    mockArticles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
    const cards = container.getElementsByClassName('MuiGrid-item');
    expect(cards.length).toBe(3);
  });
});

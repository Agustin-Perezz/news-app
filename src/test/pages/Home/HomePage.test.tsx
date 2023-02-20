import { screen } from '@testing-library/react';
import { NewsContext } from '../../../context/NewsContext';
import { HomePage } from '../../../pages';
import { mockArticles } from '../../components/ui/Cards/mockArticles';
import { renderWithCache } from '../../utils';

describe('Test in <HomePage />', () => {
  const setState = jest.fn();
  function setup() {
    const { container } = renderWithCache({
      cacheValue: { country: 'Argentina' },
      route: '/home',
      children: (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <NewsContext.Provider value={{ isLoading: false, setState, data: mockArticles }}>
          <HomePage />
        </NewsContext.Provider>
      ),
    });
    return container;
  }

  it('should match snapshot', () => {
    const container = setup();
    expect(container).toMatchSnapshot();
  });
  it('should show initial messages', () => {
    setup();
    screen.getByText('Welcome.');
    screen.getByText('Top news from Argentina.');
  });
  it('should show defaults top news in view', async () => {
    const container = setup();
    mockArticles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
    const cards = container.getElementsByClassName('MuiGrid-item');
    expect(cards.length).toBe(3);
  });
});

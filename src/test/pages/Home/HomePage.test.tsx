import { render, screen } from '@testing-library/react';
import { NewsContext } from '../../../context/NewsContext';
import { HomePage } from '../../../pages';
import { mockArticles } from '../../components/ui/Cards/mockArticles';

describe('Test in <HomePage />', () => {
  const setState = jest.fn();
  function setup() {
    const { container } = render(
      <NewsContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{ isLoading: false, setState, data: mockArticles }}
      >
        <HomePage />
      </NewsContext.Provider>
    );
    return container;
  }

  it('should match snapshot', () => {
    setup();
    expect(screen).toMatchSnapshot();
  });
  it('should show initial messages', () => {
    setup();
    screen.getByText('Results for search:');
    screen.getByText('Welcome.');
  });
  it('should show defaults top news in view', async () => {
    const container = setup();
    mockArticles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
    const cards = container.getElementsByClassName('MuiGrid-item');
    expect(cards.length).toBe(2);
  });
});

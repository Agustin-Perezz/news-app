import { jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { NewsContext, NewsContextProps } from '../context/NewsContext';
import { NewsApp } from '../NewsApp';
import { dataNews } from './mockDataNews';

describe('Test in <NewsApp />', () => {
  const getNewsByQuery = jest.fn<(query: string) => Promise<void>>();
  function setup(props: NewsContextProps) {
    return render(
      <NewsContext.Provider value={props}>
        <NewsApp />
      </NewsContext.Provider>
    );
  }
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    render(<NewsApp />);
    expect(screen).toMatchSnapshot();
  });
  it('should contain main div container', () => {
    const {
      container: { firstChild: div },
    } = render(<NewsApp />);
    expect(div).toHaveClass('MuiContainer-root');
  });

  it('should not render data and not call getNewsByQuery', () => {
    const { container } = setup({ getNewsByQuery, isLoading: false });
    const result = container.getElementsByClassName('css-17kvl7a-MuiGrid-root');
    expect(result[0]).toBe(undefined);
    expect(getNewsByQuery).toHaveBeenCalledTimes(0);
  });
  it('should render loading component when isLoading is true', () => {
    const { container } = setup({ getNewsByQuery, isLoading: true });
    const loadingComponent = container.getElementsByClassName(
      'css-1kmtb1f-MuiGrid-root'
    );
    expect(loadingComponent[0]).toBeInTheDocument();
    expect(loadingComponent).toHaveLength(6);
  });
  it('should call getNewsByQuery when submit form', () => {
    setup({ getNewsByQuery, isLoading: true });
    const input = screen.getByPlaceholderText('Search any news..');
    fireEvent.change(input, { target: { value: 'messi' } });
    fireEvent.submit(input);
    expect(getNewsByQuery).toHaveBeenCalledTimes(1);
    expect(getNewsByQuery).toHaveBeenCalledWith('messi');
  });
  it('should render data from the context', () => {
    const { container } = setup({ getNewsByQuery, isLoading: false, dataNews });
    const dataCards = container.getElementsByClassName(
      'css-17kvl7a-MuiGrid-root'
    );
    expect(dataCards).toHaveLength(1);
    expect(screen.getByText(dataNews[0].published_at)).toBeInTheDocument();
    expect(screen.getByText(dataNews[0].title)).toBeInTheDocument();
  });
});

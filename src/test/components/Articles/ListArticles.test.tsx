import { render, screen } from '@testing-library/react';
import { ListArticles } from '../../../components/Articles';
import { NewsProps } from '../../../types/news-props';
import { mockArticles as data } from './mockArticles';

type Props = {
  dataArticles: NewsProps[];
  isLoading: boolean;
  isError?: string;
};

describe('Test in <ListArticles/>', () => {
  function setup(props: Props) {
    const { container } = render(<ListArticles {...props} />);
    return container;
  }

  it('should match snapshot', () => {
    setup({ dataArticles: data, isLoading: true });
    expect(screen).toMatchSnapshot();
  });
  it('should render loading skeleton component when isLoading is true', () => {
    const container = setup({ dataArticles: data, isLoading: true });
    const loadingComponent =
      container.getElementsByClassName('MuiSkeleton-root');
    expect(loadingComponent[0]).toBeInTheDocument();
  });
  it('should render articles', () => {
    setup({ dataArticles: data, isLoading: false });
    screen.getByText('Title test');
    screen.getByText('description test');
    screen.getByText('sports');
  });
});

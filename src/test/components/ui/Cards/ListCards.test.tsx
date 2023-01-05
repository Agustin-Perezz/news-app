import { render, screen } from '@testing-library/react';
import { ListCards } from '../../../../pages/News/components';
import { NewsProps } from '../../../../types';
import { mockArticles as data } from './mockArticles';

type Props = {
  dataArticles: NewsProps[];
  isLoading: boolean;
  isError?: string;
};

describe('Test in <ListCards/>', () => {
  function setup(props: Props) {
    const { container } = render(<ListCards {...props} />);
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

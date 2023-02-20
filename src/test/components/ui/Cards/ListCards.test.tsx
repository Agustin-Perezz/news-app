import { render, screen } from '@testing-library/react';
import { ListCards } from '../../../../components/ui/Cards';
import { NewsProps } from '../../../../types';
import { mockArticles as data } from './mockArticles';

type Props = {
  dataArticles: NewsProps[];
  isLoading: boolean;
  isError?: string;
};

describe('Test in <ListCards/>', () => {
  function setup(props: Props) {
    return render(<ListCards {...props} />);
  }

  it('should match snapshot', () => {
    const { container } = setup({ dataArticles: data, isLoading: true });
    expect(container).toMatchSnapshot();
  });
  it('should render loading skeleton component when isLoading is true', () => {
    const { container } = setup({ dataArticles: data, isLoading: true });
    const loadingComponent = container.getElementsByClassName('MuiSkeleton-root');
    expect(loadingComponent[0]).toBeInTheDocument();
  });
  it('should render articles', () => {
    setup({ dataArticles: data, isLoading: false });
    screen.getByText('Title test');
    screen.getByText('description test');
    screen.getByText('sports');
  });
  it('should show message when the dataArticles is empty', () => {
    setup({ dataArticles: [], isLoading: false });
    screen.getByText('Ups, no results, try with others things.');
  });
});

import { screen } from '@testing-library/react';
import { Welcome } from '../../../../../pages/Home/components/Welcome';
import { renderWhitContext } from '../../../../utils';

type Props = { cache: Record<string, string> };

describe('Test in <Welcome />', () => {
  function setup({ cache }: Props) {
    return renderWhitContext({
      children: <Welcome />,
      pathname: '/home',
      cache,
    });
  }

  it('should match snapshot', () => {
    const { container } = setup({ cache: {} });
    expect(container).toMatchSnapshot();
  });
  it('should render main content', () => {
    setup({ cache: {} });
    screen.getByText('Welcome.');
    screen.getByText('Most recent top news.');
    screen.findByTestId('modal');
  });
  it('should render correctly information if the cache contain any country', () => {
    setup({ cache: { country: 'Argentina' } });
    screen.getByText('Top news from Argentina.');
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});

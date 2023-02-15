import { screen } from '@testing-library/react';
import { SortSelector } from '../../../../../../pages/News/components/Header/SortSelector';
import { renderWithCache } from '../../../../../utils';

type Props = { cacheValue: Record<string, string>; route: string };

describe('Test in <SortSelector />', () => {
  function setup(props: Props) {
    return renderWithCache({
      ...props,
      children: <SortSelector />,
    });
  }

  it('should match snapshot', () => {
    setup({ cacheValue: {}, route: '' });
    expect(screen).toMatchSnapshot();
  });
  it('should show the sort title and the default sort option', async () => {
    setup({ cacheValue: {}, route: '' });
    screen.getAllByText('Sort by');
    screen.getByText('Most Recent');
  });
  it('should show value from cache', () => {
    setup({ cacheValue: { 'option-value': 'Last Month' }, route: '' });
    screen.getByText('Last Month');
  });
});

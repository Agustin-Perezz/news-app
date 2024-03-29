import { screen } from '@testing-library/react';
import { ModalCountries } from '../../../../../pages/Home/components/Modal';
import { renderWithCache } from '../../../../utils';

type Props = { cacheValue: Record<string, string> };

describe('Test in <ModalCountries />', () => {
  function setup({ cacheValue }: Props) {
    return renderWithCache({ cacheValue, route: '/home', children: <ModalCountries /> });
  }

  it('should match snapshot', () => {
    const { container } = setup({ cacheValue: {} });
    expect(container).toMatchSnapshot();
  });
  it('should show header title', () => {
    setup({ cacheValue: {} });
    screen.getByText('Select your country.');
  });
  it('should not show the modal if cache contain the country key', () => {
    setup({ cacheValue: { country: 'Argentina' } });
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});

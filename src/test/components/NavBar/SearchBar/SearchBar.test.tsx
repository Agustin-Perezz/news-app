import { fireEvent, screen } from '@testing-library/react';
import { SearchBar } from '../../../../components/NavBar/SearchBar';
import { getSortParameters } from '../../../../utilities';
import { renderWithCache } from '../../../utils';

describe('Test in <SearchBar />', () => {
  const handleSubmit = jest.fn();
  function setup(query?: string) {
    return renderWithCache({
      cacheValue: { 'query-value': query || '' },
      route: '/search',
      children: <SearchBar handleSubmit={handleSubmit} />,
    });
  }

  it('should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it('should set value input from cache', () => {
    setup('queryTest');
    const input = screen.getByPlaceholderText('Search any news..');
    expect(input).toHaveValue('queryTest');
  });
  it('should type in search input', () => {
    setup();
    const input = screen.getByPlaceholderText('Search any news..');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
  it('should call handleSubmit with correct arguments', async () => {
    setup();

    const { sortParamaters } = getSortParameters('test', 'Most Recent');

    const input = screen.getByPlaceholderText('Search any news..');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(input);

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith({ ...sortParamaters });
  });
});

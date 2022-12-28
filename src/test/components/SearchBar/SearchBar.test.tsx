import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../../components/SearchBar';

describe('Test in <SearchBar />', () => {
  const handleSubmit: (query: string) => void = jest.fn();
  beforeEach(() => {
    render(<SearchBar handleSubmit={handleSubmit} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should call submitFuction', () => {
    const input = screen.getByPlaceholderText('Search any news..');
    fireEvent.change(input, { target: { value: 'messi' } });
    fireEvent.submit(input);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith('messi');
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '../../../../../pages/Header/Components';

describe('Test in <SearchBar.test />', () => {
  const handleSubmit = jest.fn();
  function setup() {
    const { container } = render(<SearchBar handleSubmit={handleSubmit} />);
    return container;
  }
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    setup();
    expect(screen).toMatchSnapshot();
  });
  it('should type in search input', () => {
    setup();
    const input = screen.getByPlaceholderText('Search any news..');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });
  it('should calll handleSubmit with correct arguments', async () => {
    setup();
    const parameters = {
      endpoint: '/all?api_token=undefined&search=test',
      navigateUrl: 'search?q=test',
      urlParameter: 'test',
    };

    const input = screen.getByPlaceholderText('Search any news..');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(input);

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith({ ...parameters });
  });
});

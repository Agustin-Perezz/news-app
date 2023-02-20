import { fireEvent, screen } from '@testing-library/react';
import { CategoriesNavBar, listCategories } from '../../../../components/NavBar/CategoriesNavBar';
import { renderWhitContext } from '../../../utils';

describe('Test in <CategoriesNavBar />', () => {
  const handleClick = jest.fn();
  function setup() {
    return renderWhitContext({
      cache: {},
      pathname: '/home',
      children: <CategoriesNavBar handleClick={handleClick} />,
    });
  }
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it('should show all text categories', () => {
    setup();
    listCategories.shift();
    listCategories.forEach(({ category }) => {
      screen.getByText(category);
    });
  });
  it('should call handleClick when click any category', () => {
    setup();
    const parameters = {
      endpoint: '/top?api_token=undefined&categories=sports',
      navigateUrl: 'category/sports',
      urlParameter: 'sports',
    };

    const sportCategory = screen.getByRole('tab', { name: 'sports' });
    fireEvent.click(sportCategory);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledWith({ ...parameters });
  });
});

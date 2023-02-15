import { fireEvent, screen } from '@testing-library/react';
import { CategoriesNavBar, listCategories } from '../../../../../pages/Header/Components';
import { renderWhitContext } from '../../../../utils';

describe('Test in <CategoriesNavBar />', () => {
  const handleClick = jest.fn();
  const handleSetTab = jest.fn();
  function setup() {
    renderWhitContext({
      cache: {},
      pathname: '/home',
      children: (
        <CategoriesNavBar
          handleClick={handleClick}
          handleSetTab={handleSetTab}
          activeCategoryTab={1}
        />
      ),
    });
  }
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    setup();
    expect(screen).toMatchSnapshot();
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
  it('should call setTab when click any category', async () => {
    setup();
    const sportCategory = screen.getByRole('tab', { name: 'sports' });
    fireEvent.click(sportCategory);

    expect(handleSetTab).toHaveBeenCalled();
  });
});

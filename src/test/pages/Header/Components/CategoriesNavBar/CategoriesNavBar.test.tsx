import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  CategoriesNavBar,
  listCategories,
} from '../../../../../pages/Header/Components';

describe('Test in <CategoriesNavBar.test />', () => {
  const handleClick = jest.fn();
  const handleChangeTab = jest.fn();
  function setup() {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <CategoriesNavBar
          handleClick={handleClick}
          handleChangeTab={handleChangeTab}
          activeCategoryTab={1}
        />
      </MemoryRouter>
    );
    return container;
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
    listCategories.forEach((cat) => {
      screen.getByRole('tab', { name: cat.category.toLowerCase() });
    });
  });
  it('should show deafult active home category', () => {
    setup();
    const homeCategory = screen.getByRole('tab', { name: 'home' });
    expect(homeCategory).toHaveAttribute('aria-selected', 'true');
  });
  it('should call handleClick when click any category', async () => {
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

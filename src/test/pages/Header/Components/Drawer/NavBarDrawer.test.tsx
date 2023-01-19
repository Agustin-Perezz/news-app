import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CategoryProvider } from '../../../../../context/CategoryContext';
import { NewsProvider } from '../../../../../context/NewsContext';
import { DrawerCategories, NavBarDrawer } from '../../../../../pages/Header/Components';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => ({
    pathname: 'http://localhost:3000/news-app/home',
  }),
}));

describe('Test in <NavBarDrawer />', () => {
  const handleSubmit = jest.fn();
  let globalContainer: HTMLElement;
  beforeEach(() => {
    const { container } = render(
      <NewsProvider>
        <CategoryProvider>
          <NavBarDrawer handleSubmit={handleSubmit} />
        </CategoryProvider>
      </NewsProvider>
    );
    globalContainer = container;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should init with hidden drawer', () => {
    const icon = screen.getByTestId('MenuRoundedIcon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
  it('should open the drawer when click button', async () => {
    fireEvent.click(screen.getByRole('button'));
    const drawerContent = screen.getByRole('presentation');
    expect(drawerContent).toBeInTheDocument();
  });
  it('should call handleSubmit when click in the any category of the drawer', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('sports'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});

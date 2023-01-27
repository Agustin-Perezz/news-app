import { fireEvent, screen } from '@testing-library/react';
import { NavBarDrawer } from '../../../../../pages/Header/Components';
import { renderWhitContext } from '../../../../utils';

const currentRoute = 'localhost:3000/news-app/search?q=test';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => ({
    pathname: currentRoute,
    search: currentRoute,
  }),
}));

describe('Test in <NavBarDrawer />', () => {
  const handleSubmit = jest.fn();
  beforeEach(() => {
    renderWhitContext({
      children: <NavBarDrawer handleSubmit={handleSubmit} />,
      pathname: '/category/home',
    });
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

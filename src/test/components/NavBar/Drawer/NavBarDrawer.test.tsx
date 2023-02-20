import { fireEvent, screen } from '@testing-library/react';
import { NavBarDrawer } from '../../../../components/NavBar/Drawer';
import { renderWhitContext } from '../../../utils';

describe('Test in <NavBarDrawer />', () => {
  const handleSubmit = jest.fn();
  function setup() {
    return renderWhitContext({
      children: <NavBarDrawer handleSubmit={handleSubmit} />,
      pathname: '/category/home',
      cache: {},
    });
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it('should init with hidden drawer', () => {
    setup();
    const icon = screen.getByTestId('MenuRoundedIcon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
  it('should open the drawer when click button', async () => {
    setup();
    fireEvent.click(screen.getByRole('button'));
    const drawerContent = screen.getByRole('presentation');
    expect(drawerContent).toBeInTheDocument();
  });
  it('should call handleSubmit when click in the any category of the drawer', () => {
    setup();
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('sports'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});

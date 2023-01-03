import { render, screen } from '@testing-library/react';
import { NavBar } from '../../../components/NavBar/NavBar';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Test in <Navbar />', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it('should match whit snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should contain main icons and titles in navbar', () => {
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument();
  });
});

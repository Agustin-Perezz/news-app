import { render, screen } from '@testing-library/react';
import { NavBar } from '../../../pages/Header';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Test in <Navbar />', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it('should match with snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should contain icons', () => {
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument();
  });
  it('should contain news logo and search-bar', () => {
    expect(screen.getByAltText('news-logo')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Search any news..')
    ).toBeInTheDocument();
  });
});

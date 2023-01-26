import { screen } from '@testing-library/react';
import { NavBar } from '../../../../../pages/Header/Components';
import { createMatchMedia, renderWhitContext } from '../../../../utils';

describe('Test in <Navbar />', () => {
  beforeEach(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
    renderWhitContext({ children: <NavBar />, pathname: '/home' });
  });
  it('should match with snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should contain main icons', () => {
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument();
  });
  it('should contain news logo and search-bar', () => {
    expect(screen.getByAltText('news-logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search any news..')).toBeInTheDocument();
  });
});

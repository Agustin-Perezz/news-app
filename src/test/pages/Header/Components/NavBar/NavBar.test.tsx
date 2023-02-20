import { screen } from '@testing-library/react';
import { NavBar } from '../../../../../pages/Header/Components';
import { createMatchMedia, renderWhitContext } from '../../../../utils';

describe('Test in <Navbar />', () => {
  function setup() {
    window.matchMedia = createMatchMedia(window.innerWidth);
    return renderWhitContext({
      children: <NavBar />,
      pathname: '/category/science',
      cache: {},
    });
  }

  it('should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it('should contain main icons', () => {
    setup();
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument();
  });
  it('should contain news logo and search-bar', () => {
    setup();
    expect(screen.getByAltText('news-logo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search any news..')).toBeInTheDocument();
  });
});

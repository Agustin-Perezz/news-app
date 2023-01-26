import mediaQuery from 'css-mediaquery';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NewsProvider } from '../../../../../context/NewsContext';
import { NavBar } from '../../../../../pages/Header/Components';
import { CategoryProvider } from '../../../../../context/CategoryContext';
import { CacheProvider } from '../../../../../context/CacheContext';
import { renderWhitContext } from '../../../../utils';

describe('Test in <Navbar />', () => {
  function createMatchMedia(width: number) {
    return (query: string): MediaQueryList => ({
      matches: mediaQuery.match(query, { width }) as boolean,
      media: '',
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    });
  }
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

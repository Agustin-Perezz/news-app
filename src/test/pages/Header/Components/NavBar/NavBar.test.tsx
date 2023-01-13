import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NewsProvider } from '../../../../../context/NewsContext';
import { NavBar } from '../../../../../pages/Header/Components';

describe('Test in <Navbar />', () => {
  beforeEach(() => {
    render(
      <NewsProvider>
        <MemoryRouter initialEntries={['/home']}>
          <NavBar />
        </MemoryRouter>
      </NewsProvider>
    );
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
    expect(
      screen.getByPlaceholderText('Search any news..')
    ).toBeInTheDocument();
  });
});

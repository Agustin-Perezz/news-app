import { render, screen } from '@testing-library/react';
import { NewsProvider } from '../../../../context/NewsContext';
import { HeaderPage } from '../../../../pages';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => ({
    pathname: 'localhost:3000/news-app/home',
  }),
}));

describe('Test in <HeaderPage />', () => {
  beforeEach(() => {
    render(
      <NewsProvider>
        <HeaderPage />
      </NewsProvider>
    );
  });
  it('should match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should render main content', () => {
    screen.getByAltText('news-logo');
    screen.getByPlaceholderText('Search any news..');
    screen.getByTestId('GitHubIcon');
    screen.getByTestId('TwitterIcon');
    screen.getByTestId('LinkedInIcon');
  });
});

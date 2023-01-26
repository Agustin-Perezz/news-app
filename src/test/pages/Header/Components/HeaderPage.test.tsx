import { screen } from '@testing-library/react';
import { HeaderPage } from '../../../../pages';
import { renderWhitContext } from '../../../utils';

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

describe('Test in <HeaderPage />', () => {
  beforeEach(() => {
    renderWhitContext({ children: <HeaderPage />, pathname: '/search' });
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

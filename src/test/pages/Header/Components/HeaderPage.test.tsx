import { screen } from '@testing-library/react';
import { HeaderPage } from '../../../../pages';
import { renderWhitContext } from '../../../utils';

describe('Test in <HeaderPage />', () => {
  beforeEach(() => {
    renderWhitContext({ children: <HeaderPage />, pathname: '/search', cache: {} });
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

import { screen } from '@testing-library/react';
import { HeaderPage } from '../../../../pages';
import { renderWhitContext } from '../../../utils';

describe('Test in <HeaderPage />', () => {
  function setup() {
    return renderWhitContext({ children: <HeaderPage />, pathname: '/search', cache: {} });
  }

  it('should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it('should render main content', () => {
    setup();
    screen.getByAltText('news-logo');
    screen.getByPlaceholderText('Search any news..');
    screen.getByTestId('GitHubIcon');
    screen.getByTestId('TwitterIcon');
    screen.getByTestId('LinkedInIcon');
  });
});

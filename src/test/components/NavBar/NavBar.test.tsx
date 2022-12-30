import { render, screen } from '@testing-library/react';
import { NavBar } from '../../../pages/Search/components/NavBar/NavBar';

describe('Test in <Navbar />', () => {
  beforeEach(() => {
    render(<NavBar />);
  });
  it('should match whit snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('should contain main icons and titles in navbar', () => {
    expect(screen.getByText('The power of information')).toBeInTheDocument();
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument();
  });
});

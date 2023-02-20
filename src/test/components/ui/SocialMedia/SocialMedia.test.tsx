import { render, screen } from '@testing-library/react';
import { SocialMedia } from '../../../../components/ui/SocialMedia';

describe('Test in <SocialMedia />', () => {
  let globalContainer: HTMLElement;
  beforeEach(() => {
    const { container } = render(<SocialMedia />);
    globalContainer = container;
  });

  it('should match snapshot', () => {
    expect(globalContainer).toMatchSnapshot();
  });
  it('should have 3 html elements <a/> whit respectives href url', () => {
    const aTags = globalContainer.querySelectorAll('a');
    expect(aTags.length).toBe(3);
    expect(aTags[0]).toContainHTML('a');
    expect(aTags[0]).toHaveAttribute('href', 'https://github.com/Agustin-Perezz');
    expect(aTags[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/agustinperez-front-end-developer/'
    );
    expect(aTags[2]).toHaveAttribute('href', 'https://twitter.com/agustinperez__');
  });
  it('should contain respectives styles', () => {
    const avatarClasses = globalContainer.getElementsByClassName('MuiAvatar-root');
    expect(avatarClasses[0].className).toBe(
      'MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-4blva6-MuiAvatar-root'
    );
    expect(avatarClasses.length).toBe(3);
  });
});

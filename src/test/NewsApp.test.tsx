import { render, screen } from '@testing-library/react';
import { NewsApp } from '../NewsApp';

describe('Test in <NewsApp />', () => {
  it('should match snapshot', () => {
    render(<NewsApp />);
    expect(screen).toMatchSnapshot();
  });
  it('should contain main div container', () => {
    const {
      container: { firstChild: div },
    } = render(<NewsApp />);
    expect(div).toHaveClass('MuiContainer-root');
  });
  it('should find main image header', () => {
    const { getAllByAltText } = render(<NewsApp />);
    getAllByAltText('news-logo');
  });
});

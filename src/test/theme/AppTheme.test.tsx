import { render, screen } from '@testing-library/react';
import { AppTheme } from '../../theme';

describe('Test in <AppTheme />', () => {
  beforeEach(() => {
    render(
      <AppTheme>
        <h2>test</h2>
      </AppTheme>
    );
  });
  it('should render children', () => {
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toContainHTML('h2');
  });
});

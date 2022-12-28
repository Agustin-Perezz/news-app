import { render, screen } from '@testing-library/react';
import { ErrorBox } from '../../../components/ui/Error';

describe('Test in <ErrorBox />', () => {
  it('should match snapshot', () => {
    render(<ErrorBox errorMessage="test-error" />);
    expect(screen).toMatchSnapshot();
  });
  it('should show message', () => {
    render(<ErrorBox errorMessage="test-error" />);
    screen.getByText('test-error');
  });
});

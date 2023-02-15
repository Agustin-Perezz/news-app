import { render, screen } from '@testing-library/react';
import { ErrorBox } from '../../../../components/ui/Error';

describe('Test in <ErrorBox />', () => {
  function setup() {
    return render(<ErrorBox errorMessage="test-error" />);
  }

  it('should match snapshot', () => {
    setup();
    expect(screen).toMatchSnapshot();
  });
});

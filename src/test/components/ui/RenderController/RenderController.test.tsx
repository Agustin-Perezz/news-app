import { render, screen } from '@testing-library/react';
import { PropsRender, RenderController } from '../../../../components/ui/RenderController';
import { NewsProps } from '../../../../types';

type Props = Omit<PropsRender, 'children'>;

describe('Test in <RenderController />', () => {
  function setup(params: Props) {
    return render(
      <RenderController {...params}>
        <span>test</span>
      </RenderController>
    );
  }
  it('should match snapshot', () => {
    const { container } = setup({ isLoading: false });
    expect(container).toMatchSnapshot();
  });
  it('should render children', () => {
    setup({ isLoading: false });
    screen.getByText('test');
  });
  it('should not show content when isLoading is true', () => {
    setup({ isLoading: true });
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
  it('should show error message', () => {
    setup({ isLoading: false, isError: 'Error' });
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
  it('should information message when data length is equal to 0', () => {
    const data: NewsProps[] | undefined = [];
    setup({ isLoading: false, data });
    screen.getByText('Ups, no results, try with others things.');
  });
});

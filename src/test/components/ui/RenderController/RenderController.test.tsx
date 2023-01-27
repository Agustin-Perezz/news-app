import { render, screen } from '@testing-library/react';
import { PropsRender, RenderController } from '../../../../components/ui/RenderController';
import { NewsProps } from '../../../../types';

describe('Test in <RenderController />', () => {
  function setup(params: PropsRender) {
    render(<RenderController {...params}>{params.children}</RenderController>);
  }
  it('should match snapshot', () => {
    setup({ children: <span>test</span>, isLoading: false });
    expect(screen).toMatchSnapshot();
  });
  it('should render children', () => {
    setup({ children: <span>test</span>, isLoading: false });
    screen.getByText('test');
  });
  it('should not show content when isLoading is true', () => {
    setup({ children: <span>test</span>, isLoading: true });
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
  it('should show error message', () => {
    setup({ children: <span>test</span>, isLoading: false, isError: 'Error' });
    screen.getByText('Error');
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
  it('should information message when data length is equal to 0', () => {
    const data: NewsProps[] | undefined = [];
    setup({ children: <span>test</span>, isLoading: false, data });
    screen.getByText('Ups, no results, try with others things.');
  });
});

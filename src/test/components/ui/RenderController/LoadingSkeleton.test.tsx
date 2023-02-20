import { render, screen } from '@testing-library/react';
import { LoadingSkeleton } from '../../../../components/ui/RenderController';

describe('Test in <LoadingSkeleton />', () => {
  it('should match snapshot', () => {
    const { container } = render(<LoadingSkeleton />);
    expect(container).toMatchSnapshot();
  });
  it('should contain material ui classes for skeleton components ', () => {
    const { container } = render(<LoadingSkeleton />);
    const classSkeletons = container.getElementsByClassName('MuiSkeleton-root');
    expect(classSkeletons[0].className).toBe(
      'MuiSkeleton-root MuiSkeleton-rectangular MuiSkeleton-wave css-1kcnzpi-MuiSkeleton-root'
    );
    expect(classSkeletons.length).toBe(30);
  });
});

import { SelectChangeEvent } from '@mui/material';
import { renderHook, act } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { useControllerSort } from '../../../../pages/News/hooks';
import { createWrapperEnvironment } from '../../../utils';

type Props = { cache: Record<string, string>; route: string };

describe('Test in useControllerSort', () => {
  function setup(props: Props) {
    const wrapper = ({ children }: PropsWithChildren) => {
      return createWrapperEnvironment({ ...props, children });
    };
    return renderHook(() => useControllerSort(), { wrapper });
  }

  it('should initialize correctly', () => {
    const { result } = setup({ cache: { 'option-value': '' }, route: '/search' });
    expect(typeof result.current.optionSort).toBe('string');
    expect(result.current.optionSort).toBe('Most Recent');
    expect(result.current.onChange).toBeInstanceOf(Function);
  });
  it('should call onChange and set values correctly', () => {
    const { result } = setup({ cache: { 'option-value': '' }, route: '/search' });

    act(() => {
      result.current.onChange({ target: { value: 'Last Month' } } as SelectChangeEvent<string>);
    });

    expect(result.current.optionSort).toBe('Last Month');
  });
  it('should get value from cache when is loading for first time', () => {
    const { result, unmount } = setup({
      cache: { 'option-value': 'Most Recent' },
      route: '/search',
    });

    expect(result.current.optionSort).toBe('Most Recent');

    act(() => {
      result.current.onChange({ target: { value: 'Last Month' } } as SelectChangeEvent<string>);
    });

    unmount();
    expect(result.current.optionSort).toBe('Last Month');
  });
});

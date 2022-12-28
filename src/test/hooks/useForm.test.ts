import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../hooks';

describe('Test in useForm', () => {
  function setup(param: string) {
    const {
      result: { current },
      rerender,
    } = renderHook(() => useForm(param));
    return { current, rerender };
  }

  it('should get initial value from props', () => {
    const { current } = setup('test');
    expect(current.query).toBe('test');
  });
  it('should get initial value when call function rerender', () => {
    let initialValue = 'test';

    const { current, rerender } = setup(initialValue);

    initialValue = 'new_value';
    rerender();
    act(() => {
      current.reset();
    });

    expect(current.query).toBe('test');
  });
});

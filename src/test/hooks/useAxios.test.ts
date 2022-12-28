import { renderHook } from '@testing-library/react';
import { useAxios } from '../../hooks';

describe('Test in useAxios', () => {
  function setup() {
    const {
      result: { current },
      rerender,
    } = renderHook(() => useAxios());
    return { current, rerender };
  }

  it('should init loading in false', () => {
    const { current } = setup();
    expect(current.isLoading).toBe(false);
  });
});

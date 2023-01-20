import { renderHook, act } from '@testing-library/react';
import { useLoadImage } from '../../hooks';

describe('test in hook useLoadImage', () => {
  function setup() {
    const result = renderHook(() => useLoadImage());
    return result;
  }

  it('should contain the respective functions and default state', () => {
    const {
      result: { current },
    } = setup();
    expect(current.loaded).toBe(false);
    expect(current.onError).toBeInstanceOf(Function);
    expect(current.onLoad).toBeInstanceOf(Function);
  });
  it('should set loaded in true when call onLoad', () => {
    const { result } = setup();

    act(() => {
      result.current.onLoad();
    });

    expect(result.current.loaded).toBe(true);
  });
});

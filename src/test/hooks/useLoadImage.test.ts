import { renderHook, act } from '@testing-library/react';
import { useLoadImage } from '../../hooks';

type CurrentTarget = { currentTarget: EventTarget & HTMLImageElement };

describe('test in hook useLoadImage', () => {
  function setup() {
    return renderHook(() => useLoadImage());
  }

  it('should contain the respective functions and default state', () => {
    const { result } = setup();
    expect(result.current.loaded).toBe(false);
    expect(result.current.onError).toBeInstanceOf(Function);
    expect(result.current.onLoad).toBeInstanceOf(Function);
  });
  it('should set loaded in true when call onLoad', () => {
    const { result } = setup();

    act(() => {
      result.current.onLoad();
    });

    expect(result.current.loaded).toBe(true);
  });
  it('should call onError', () => {
    const { result } = setup();
    result.current.onError = jest.fn();

    act(() => {
      const currentTarget = { currentTarget: { src: '', onerror: null } };
      result.current.onError({ currentTarget } as unknown as CurrentTarget);
    });

    expect(result.current.onError).toHaveBeenCalled();
  });
});

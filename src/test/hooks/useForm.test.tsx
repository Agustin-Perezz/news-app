import { PropsWithChildren, ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../pages/Header/hooks';
import { createWrapperEnvironment } from '../utils';

describe('Test in useForm', () => {
  const handleSubmit = jest.fn();
  function setup() {
    const wrapper = ({ children }: PropsWithChildren) => {
      return createWrapperEnvironment({
        cache: { 'query-value': 'test' },
        route: '/search',
        children,
      });
    };
    return renderHook(() => useForm({ handleSubmit }), { wrapper });
  }

  it('should initializer correctly', () => {
    const { result } = setup();
    expect(typeof result.current.query).toBe('string');
    expect(result.current.onChange).toBeInstanceOf(Function);
    expect(result.current.onSubmit).toBeInstanceOf(Function);
  });
  it('should get initial value from cache', () => {
    const { result } = setup();
    expect(result.current.query).toBe('test');
  });
  it('should change query value when onChange is called', () => {
    const { result } = setup();

    act(() => {
      result.current.onChange('test');
    });

    expect(result.current.query).toBe('test');
  });
});

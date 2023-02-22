import { renderHook, act } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { useModalController } from '../../../../pages/Home/hooks';
import { createWrapperEnvironment } from '../../../utils';

type Props = { cache: Record<string, string>; route: string };

describe('Test in useModalController', () => {
  function setup(props: Props) {
    const wrapper = ({ children }: PropsWithChildren) => {
      return createWrapperEnvironment({ ...props, children });
    };
    return renderHook(() => useModalController(), { wrapper });
  }

  it('should initialize correctly', () => {
    const { result } = setup({ cache: {}, route: '/home' });
    expect(typeof result.current.open).toBe('boolean');
    expect(result.current.open).toBe(true);
    expect(result.current.handleClickCountry).toBeInstanceOf(Function);
  });
  it('should close modal when handleClickCountry is called', () => {
    const { result } = setup({ cache: {}, route: '/home' });
    expect(result.current.open).toBe(true);

    act(() => {
      result.current.handleClickCountry('ar', 'Argentina');
    });

    expect(result.current.open).toBe(false);
  });
  it('should set modal in false if the cache contain one country', () => {
    const { result } = setup({ cache: { country: 'Argentina' }, route: '/home' });
    expect(result.current.open).toBe(false);
  });
});

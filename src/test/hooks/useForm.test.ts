import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../pages/Header/hooks';

describe('Test in useForm', () => {
  // function setup(param: string) {
  //   const result = renderHook(() => useForm(param));
  //   return result;
  // }
  // it('should get initial value from props', () => {
  //   const { result } = setup('test');
  //   expect(result.current.query).toBe('test');
  // });
  // it('should change te value at call onChange', () => {
  //   const { result } = setup('');
  //   expect(result.current.query).toBe('');
  //   act(() => {
  //     result.current.onChange('test');
  //   });
  //   expect(result.current.query).toBe('test');
  // });
});

import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../pages/Header/hooks';

describe('Test in useForm', () => {
  const handleSubmit = jest.fn();
  // const onChange = jest.fn();
  function setup() {
    const result = renderHook(() => useForm({ handleSubmit }));
    return result;
  }
  it('should initializer correctly', () => {
    const { result } = setup();
    expect(result.current.onChange).toBeInstanceOf(Function);
    expect(result.current.onSubmit).toBeInstanceOf(Function);
  });
});

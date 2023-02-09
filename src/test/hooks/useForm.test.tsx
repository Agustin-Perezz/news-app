import { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useForm } from '../../pages/Header/hooks';
import { CacheContext } from '../../context/CacheContext';

describe('Test in useForm', () => {
  const handleSubmit = jest.fn();
  const removePropertyCache = jest.fn();
  const setCache = jest.fn();
  function setup() {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MemoryRouter initialEntries={['/search']}>
        <CacheContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{ cache: { 'query-value': 'test' }, removePropertyCache, setCache }}
        >
          {children}
        </CacheContext.Provider>
      </MemoryRouter>
    );
    const result = renderHook(() => useForm({ handleSubmit }), { wrapper });
    return result;
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

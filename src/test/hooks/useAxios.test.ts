import { renderHook, act } from '@testing-library/react';
import { newsApi } from '../../api';
import { useAxios } from '../../hooks/useAxios';

const API_KEY = process.env.REACT_APP_API_KEY;

describe('Test in useAxios', () => {
  function setup() {
    const results = renderHook(() => useAxios());
    return results;
  }

  it('should init default values', () => {
    const { result } = setup();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(undefined);
    expect(result.current.fetchData).toBeInstanceOf(Function);
  });
  it('should call fetchData with correctly arguments', async () => {
    const { result } = setup();
    result.current.fetchData = jest.fn();

    const parameters = {
      programApi: newsApi,
      endpoint: `/all?api_token=${API_KEY}&search=messi`,
      urlParameter: 'messi',
    };

    await act(async () => {
      await result.current.fetchData({ ...parameters });
    });

    expect(result.current.fetchData).toHaveBeenCalled();
    expect(result.current.fetchData).toHaveBeenCalledWith({ ...parameters });
  });
});

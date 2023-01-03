import { act, renderHook } from '@testing-library/react';
import { useAxios } from '../../hooks';
import { newsApi } from '../../api';

const API_KEY = process.env.REACT_APP_API_KEY;

describe('Test in useAxios', () => {
  function setup() {
    const results = renderHook(() => useAxios());
    return results;
  }

  it('should init default values', () => {
    const { result } = setup();
    expect(result.current.isLoading).toBe(false);
  });
  it('should call fetchData with correctly arguments', async () => {
    const { result } = setup();
    result.current.fetchData = jest.fn();

    const parameters = {
      programApi: newsApi,
      url: `/all?api_token=${API_KEY}&search=messi`,
      urlParameter: 'messi',
    };

    await act(async () => {
      await result.current.fetchData({ ...parameters });
    });

    expect(result.current.fetchData).toHaveBeenCalled();
    expect(result.current.fetchData).toHaveBeenCalledWith({ ...parameters });
  });
});

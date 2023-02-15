import { renderHook, act } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { newsApi } from '../../api';
import { useAxios } from '../../hooks/useAxios';
import { mockArticles } from '../components/ui/Cards/mockArticles';
import { createWrapperEnvironment } from '../utils';

const API_KEY = process.env.REACT_APP_API_KEY;

type Props = { cache: Record<string, string>; route: string };

describe('Test in useAxios', () => {
  function setup(props: Props) {
    const wrapper = ({ children }: PropsWithChildren) => {
      return createWrapperEnvironment({ ...props, children });
    };
    return renderHook(() => useAxios(), { wrapper });
  }

  const parameters = {
    programApi: newsApi,
    endpoint: `/all?api_token=${API_KEY}&search=messi`,
    urlParameter: 'messi',
  };

  it('should init default values', () => {
    const { result } = setup({ cache: {}, route: '' });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(undefined);
    expect(result.current.fetchData).toBeInstanceOf(Function);
  });
  it('should call fetchData with correctly arguments', async () => {
    const { result } = setup({ cache: {}, route: '' });

    let response;
    result.current.fetchData = jest.fn().mockReturnValueOnce(mockArticles);
    await act(async () => {
      response = await result.current.fetchData({ ...parameters });
    });

    expect(response).toEqual(mockArticles);
    expect(result.current.fetchData).toHaveBeenCalled();
    expect(result.current.fetchData).toHaveBeenCalledWith({ ...parameters });
  });
  it('should return value from cache', async () => {
    const { result } = setup({ cache: { test: 'test' }, route: '' });

    let response;
    result.current.fetchData = jest.fn().mockReturnValueOnce('test');
    await act(async () => {
      response = await result.current.fetchData({ ...parameters });
    });

    expect(response).toEqual('test');
    expect(result.current.fetchData).toHaveBeenCalled();
  });
});

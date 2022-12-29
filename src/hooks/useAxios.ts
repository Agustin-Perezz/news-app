import React, { useContext } from 'react';
import { AxiosInstance } from 'axios';
import { CacheContext } from '../context/CacheContext';

type StateProps = {
  isLoading: boolean;
  isError?: string;
};

type Props = {
  programApi: AxiosInstance;
  url: string;
  urlParameter: string;
};

export const useAxios = () => {
  const [state, setState] = React.useState<StateProps>({
    isLoading: false,
  });

  const { setCache, cache } = useContext(CacheContext);

  const fetchData = async <T>({ programApi, url, urlParameter }: Props) => {
    try {
      let data: T;
      setState({ isLoading: true });
      if (cache?.key === urlParameter) {
        data = JSON.parse(cache.value);
      } else {
        const { data: response } = await programApi.get<T>(url);
        data = response;
        setCache({ key: urlParameter, value: JSON.stringify(data) });
      }
      setState({ isLoading: false });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        setState({ isLoading: false, isError: error.message });
        throw new Error(error.message);
      }
      throw new Error('Something work bad!');
    }
  };

  return { ...state, fetchData };
};

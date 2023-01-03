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

  // eslint-disable-next-line consistent-return
  const fetchData = async <T>({ programApi, url, urlParameter }: Props) => {
    try {
      setState({ isLoading: true });
      if (cache?.key === urlParameter) {
        return JSON.parse(cache.value);
      }
      const { data: response } = await programApi.get<T>(url);
      setCache({ key: urlParameter, value: JSON.stringify(response) });
      setState({ isLoading: false });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        setState({ isLoading: false, isError: error.message });
      }
      setState({ isLoading: false, isError: 'Something work bad :(' });
    }
  };

  return { ...state, fetchData };
};

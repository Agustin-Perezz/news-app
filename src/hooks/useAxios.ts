import React, { useContext } from 'react';
import { CacheContext } from '../context/CacheContext';
import { ParametersFetchData } from '../types';

type StateProps = {
  isLoading: boolean;
  isError?: string;
};

export const useAxios = () => {
  const [state, setState] = React.useState<StateProps>({
    isLoading: false,
  });

  const { setCache, cache } = useContext(CacheContext);

  const fetchData = async <T>({
    programApi,
    endpoint,
    urlParameter,
  }: // eslint-disable-next-line consistent-return
  ParametersFetchData) => {
    try {
      setState({ isLoading: true });
      if (cache?.key === urlParameter) {
        return JSON.parse(cache.value);
      }
      const { data: response } = await programApi.get<T>(endpoint);
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

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

  const fetchData = async <T>({ programApi, endpoint, urlParameter }: ParametersFetchData) => {
    try {
      setState({ isLoading: true });
      if (cache[urlParameter] !== undefined) {
        setState({ isLoading: false });
        return cache[urlParameter];
      }
      const { data: response } = await programApi.get<T>(endpoint);
      setCache({ key: urlParameter, value: response });
      setState({ isLoading: false });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        setState({ isLoading: false, isError: error.message });
      }
      setState({ isLoading: false, isError: 'Something work bad :(' });
      return undefined;
    }
  };

  return { ...state, fetchData };
};

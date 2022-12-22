import React from 'react';
import { AxiosInstance } from 'axios';

type StateProps = {
  isLoading: boolean;
  isError?: string;
};

type Props = {
  programApi: AxiosInstance;
  url: string;
};

export const useAxios = () => {
  const [state, setState] = React.useState<StateProps>({
    isLoading: false,
  });

  const fetchData = async <T>({ programApi, url }: Props) => {
    try {
      setState({ isLoading: true });
      const data = await programApi.get<T>(url);
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

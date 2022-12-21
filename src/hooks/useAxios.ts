import React from 'react';
import { AxiosInstance } from 'axios';

type StateProps = {
  isLoading: boolean;
  isError?: string;
  data: unknown | null;
};

type Props = {
  programApi: AxiosInstance;
  url: string;
};

export const useAxios = ({ programApi, url }: Props) => {
  const [state, setState] = React.useState<StateProps>({
    data: null,
    isLoading: false,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, isLoading: true });
        programApi
          .get(url)
          .then((res) => {
            setState({ data: res.data, isLoading: false });
          })
          // eslint-disable-next-line
          .catch((error) => {
            setState({
              data: null,
              isLoading: false,
              isError: error.message,
            });
          });
      } catch (error) {
        throw new Error('Something work bad!');
      }
    };
    fetchData();
  }, [programApi, url]);

  return { ...state };
};

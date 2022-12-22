import React from 'react';
import { newsApi } from '../../api';
import { useAxios } from '../../hooks';
import { NewsProps } from '../../types';
import { NewsContext } from './NewsContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = {
  newsData: unknown | null;
};

const API_KEY = process.env.REACT_APP_API_KEY;
const INIT_STATE: StateProps = { newsData: null };

export const NewsProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState(INIT_STATE);
  const { fetchData, isLoading, isError } = useAxios();

  const getNewsByQuery = async (query: string) => {
    const data = await fetchData<NewsProps>({
      programApi: newsApi,
      url: `/all?api_token=${API_KEY}&search=${query}`,
    });
    console.log('data: ', data);
  };

  return (
    <NewsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ ...state, isLoading, isError, getNewsByQuery }}
    >
      {children}
    </NewsContext.Provider>
  );
};

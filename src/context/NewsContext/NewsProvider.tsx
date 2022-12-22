import React from 'react';
import { createAddaptNew } from '../../adapters';
import { newsApi } from '../../api';
import { useAxios } from '../../hooks';
import { NewsProps, NewsResponseProps } from '../../types';
import { NewsContext } from './NewsContext';

type Props = {
  children: JSX.Element | JSX.Element[];
};

type StateProps = {
  newsData: NewsProps[] | null;
};

const API_KEY = process.env.REACT_APP_API_KEY;
const INIT_STATE: StateProps = { newsData: null };

export const NewsProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState(INIT_STATE);
  const { fetchData, isLoading, isError } = useAxios();

  const getNewsByQuery = async (query: string) => {
    const { data } = await fetchData<NewsResponseProps>({
      programApi: newsApi,
      url: `/all?api_token=${API_KEY}&search=${query}`,
    });
    const listNews = createAddaptNew(data);
    setState({ newsData: listNews });
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

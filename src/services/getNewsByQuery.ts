import { AxiosInstance } from 'axios';
import { createAddaptNew } from '../adapters';
import { newsApi } from '../api';
import { NewsResponseProps } from '../types/news-props';

type PropsFetch = {
  programApi: AxiosInstance;
  url: string;
  urlParameter: string;
};

const API_KEY = process.env.REACT_APP_API_KEY;

type Props = {
  fetchData: <T>({ programApi, url, urlParameter }: PropsFetch) => Promise<any>;
  query: string;
};

export const getNewsByQuery = async ({ fetchData, query }: Props) => {
  const response = await fetchData<NewsResponseProps>({
    programApi: newsApi,
    url: `/all?api_token=${API_KEY}&search=${query}`,
    urlParameter: query,
  });
  return createAddaptNew(response);
};

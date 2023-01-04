import { createAddaptNew } from '../adapters';
import { newsApi } from '../api';
import { FetchDataProps } from '../types';
import { NewsResponseProps } from '../types/news-props';

const API_KEY = process.env.REACT_APP_API_KEY;

type Props = FetchDataProps & { query: string };

export const getNewsByQuery = async ({ fetchData, query }: Props) => {
  const response = await fetchData<NewsResponseProps>({
    programApi: newsApi,
    endpoint: `/all?api_token=${API_KEY}&search=${query}`,
    urlParameter: query,
  });
  return createAddaptNew(response);
};

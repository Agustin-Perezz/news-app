import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAddaptNew } from '../adapters';
import { newsApi } from '../api';
import { NewsContext } from '../context/NewsContext';
import { NewsResponseProps } from '../types/news-props';
import { useAxios } from './useAxios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const useSearchBar = () => {
  const { fetchData, isLoading, isError } = useAxios();
  const { setState } = useContext(NewsContext);
  const navigate = useNavigate();

  const getNewsByQuery = async (query: string) => {
    const data = await fetchData<NewsResponseProps>({
      programApi: newsApi,
      url: `/all?api_token=${API_KEY}&search=${query}`,
      urlParameter: query,
    });
    return createAddaptNew(data);
  };

  const handleSubmit = async (query: string) => {
    setState({ isLoading: true });
    navigate(`/search?q=${query}`);
    const dataNews = await getNewsByQuery(query);
    setState({ dataNews, isLoading, isError });
  };

  return { handleSubmit };
};

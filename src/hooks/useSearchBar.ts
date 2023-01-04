import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import { getNewsByQuery } from '../services';
import { useAxios } from './useAxios';

export const useSearchBar = () => {
  const { fetchData, isLoading, isError } = useAxios();
  const { setState } = useContext(NewsContext);
  const navigate = useNavigate();

  const handleSubmit = async (query: string) => {
    setState({ isLoading: true });
    navigate(`/search?q=${query}`);
    const dataNews = await getNewsByQuery({ fetchData, query });
    setState({ dataNews, isLoading, isError });
  };

  return { handleSubmit };
};

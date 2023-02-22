import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from './useAxios';
import { newsApi } from '../api';
import { NewsResponseProps, SubmitProps } from '../types';
import { NewsContext } from '../context/NewsContext';
import { formatNewsResponse } from '../adapters';

export const useSearch = () => {
  const { fetchData, isLoading, isError } = useAxios();
  const { setState } = useContext(NewsContext);
  const navigate = useNavigate();

  const handleSubmit = async ({ navigateUrl, endpoint, urlParameter }: SubmitProps) => {
    setState({ isLoading: true });
    navigate(`/${navigateUrl}`);
    const response = await fetchData<NewsResponseProps>({
      endpoint,
      programApi: newsApi,
      urlParameter,
    });
    const data = formatNewsResponse(response as NewsResponseProps);
    setState({ data, isLoading, isError });
  };

  return { handleSubmit };
};

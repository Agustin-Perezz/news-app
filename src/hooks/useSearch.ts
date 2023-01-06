import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAddaptNew } from '../adapters';
import { newsApi } from '../api';
import { NewsContext } from '../context/NewsContext';
import { NewsResponseProps } from '../types';
import { useAxios } from './useAxios';

export type SubmitProps = {
  endpoint: string;
  urlParameter: string;
  navigateUrl: string;
};

export const useSearch = () => {
  const { fetchData, isLoading, isError } = useAxios();
  const { setState } = useContext(NewsContext);
  const navigate = useNavigate();

  const handleSubmit = async ({
    navigateUrl,
    endpoint,
    urlParameter,
  }: SubmitProps) => {
    setState({ isLoading: true });
    navigate(`/${navigateUrl}`);
    const response = await fetchData<NewsResponseProps>({
      endpoint,
      programApi: newsApi,
      urlParameter,
    });
    const data = createAddaptNew(response);
    setState({ data, isLoading, isError });
  };

  return { handleSubmit };
};

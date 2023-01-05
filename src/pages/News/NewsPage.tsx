import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { ListCards } from './components';

const NewsPage: React.FC = () => {
  const { data, isLoading, isError } = useContext(NewsContext);
  return (
    <ListCards dataArticles={data} isLoading={isLoading} isError={isError} />
  );
};

export default NewsPage;

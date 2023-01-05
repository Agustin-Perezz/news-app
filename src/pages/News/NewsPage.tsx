import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { ListCards } from './components';

const NewsPage: React.FC = () => {
  const { dataNews, isLoading, isError } = useContext(NewsContext);
  return (
    <ListCards
      dataArticles={dataNews}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default NewsPage;

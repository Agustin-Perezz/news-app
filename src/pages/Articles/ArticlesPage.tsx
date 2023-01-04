import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { ListArticles } from './components';

const ArticlesPage: React.FC = () => {
  const { dataNews, isLoading, isError } = useContext(NewsContext);
  return (
    <ListArticles
      dataArticles={dataNews}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default ArticlesPage;

import { useContext } from 'react';
import { ListArticles } from '../../components/Articles';
import { NewsContext } from '../../context/NewsContext';

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

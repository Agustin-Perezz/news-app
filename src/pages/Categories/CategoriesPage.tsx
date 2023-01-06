import { useContext } from 'react';
import { ListCards } from '../../components/ui/Cards';
import { NewsContext } from '../../context/NewsContext';

export const CategoriesPage: React.FC = () => {
  const { data, isLoading, isError } = useContext(NewsContext);
  return (
    <ListCards dataArticles={data} isLoading={isLoading} isError={isError} />
  );
};

import { Box } from '@mui/material';
import { useContext } from 'react';
import { ListCards } from '../../../components/ui/Cards';
import { NewsContext } from '../../../context/NewsContext';
import { Header } from './Header';

const NewsPage: React.FC = () => {
  const { data, isLoading, isError } = useContext(NewsContext);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
      }}
    >
      <Header headerTitle="Results for search." />
      <ListCards dataArticles={data} isLoading={isLoading} isError={isError} />
    </Box>
  );
};

export default NewsPage;

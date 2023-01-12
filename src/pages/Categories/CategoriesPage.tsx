import { Box } from '@mui/material';
import { useContext } from 'react';
import { ListCards } from '../../components/ui/Cards';
import { NewsContext } from '../../context/NewsContext';

export const CategoriesPage: React.FC = () => {
  const { data, isLoading, isError } = useContext(NewsContext);
  return (
    <Box
      sx={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <ListCards
        dataArticles={data}
        isLoading={isLoading}
        isError={isError}
        titleText="Results for search."
      />
    </Box>
  );
};

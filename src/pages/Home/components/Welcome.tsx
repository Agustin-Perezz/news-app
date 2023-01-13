import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ListCards } from '../../../components/ui/Cards';
import { NewsContext } from '../../../context/NewsContext';

export const Welcome: React.FC = () => {
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
      <Typography
        sx={{ marginBottom: '20px', width: '100%', textAlign: 'center' }}
        variant="h4"
      >
        Welcome.
      </Typography>
      <ListCards
        dataArticles={data}
        isLoading={isLoading}
        isError={isError}
        titleText="More recent top news."
      />
    </Box>
  );
};

import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ListCards } from '../../../../components/ui/Cards';
import { CacheContext } from '../../../../context/CacheContext';
import { NewsContext } from '../../../../context/NewsContext';
import { ModalCountries } from '../Modal';

export const Welcome: React.FC = () => {
  const { data, isLoading, isError } = useContext(NewsContext);
  const { cache } = useContext(CacheContext);

  return (
    <Box
      sx={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <ModalCountries />
      <Typography sx={{ marginBottom: '20px', width: '100%', textAlign: 'center' }} variant="h4">
        Welcome.
      </Typography>
      <ListCards
        dataArticles={data}
        isLoading={isLoading}
        isError={isError}
        headerTitle={cache.country ? `Top news from ${cache.country}.` : `Most recent top news.`}
      />
    </Box>
  );
};

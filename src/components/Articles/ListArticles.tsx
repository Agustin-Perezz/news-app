import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { NewsProps } from '../../types/news-props';
import { Article } from './Article';
import { RenderController } from '../ui/RenderController';

interface Props {
  dataArticles?: NewsProps[];
  isLoading: boolean;
  isError?: string;
}

export const ListArticles: React.FC<Props> = ({
  dataArticles,
  isLoading,
  isError,
}) => {
  return (
    <RenderController
      isLoading={isLoading}
      isError={isError}
      data={dataArticles}
    >
      <Box sx={{ flexGrow: 1, my: 3 }}>
        <Typography variant="h5" mb={3}>
          Results for search:
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 0, sm: 8, md: 13 }}
          justifyContent="center"
        >
          {dataArticles?.map((article) => (
            <Grid item xs={2} sm={4} md={3.5} key={article.uuid}>
              <Article dataArticle={article} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </RenderController>
  );
};

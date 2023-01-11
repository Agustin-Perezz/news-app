import React from 'react';
import { Box, Grid } from '@mui/material';
import { NewsProps } from '../../../types/news-props';
import { GeneralCard } from './GeneralCard';
import { RenderController } from '../RenderController';

interface Props {
  dataArticles?: NewsProps[];
  isLoading: boolean;
  isError?: string;
}

export const ListCards: React.FC<Props> = ({
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
      <Grid sx={{ flexGrow: 1 }} spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ maxWidth: '900px' }}
          >
            {dataArticles?.map((article) => (
              <Grid key={article.uuid} item>
                <GeneralCard dataArticle={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </RenderController>
  );
};

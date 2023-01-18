import React from 'react';
import { Grid } from '@mui/material';
import { NewsProps } from '../../../types/news-props';
import { GeneralCard } from './GeneralCard';
import { RenderController } from '../RenderController';
import { CustomGrid, CustomTitle } from './CustomStyleCard';

interface Props {
  dataArticles?: NewsProps[];
  isLoading: boolean;
  isError?: string;
  titleText?: string;
}

export const ListCards: React.FC<Props> = ({
  dataArticles,
  isLoading,
  isError,
  titleText,
}) => {
  return (
    <RenderController
      isLoading={isLoading}
      isError={isError}
      data={dataArticles}
    >
      <Grid sx={{ flexGrow: 1, margin: '25px 0px' }}>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            display: 'flex',
            position: 'relative',
          }}
        >
          <CustomGrid container spacing={3}>
            {dataArticles?.map((article, index) => (
              <Grid key={article.uuid} item>
                <GeneralCard dataArticle={article} />
                {index === 0 && (
                  <CustomTitle variant="h6"> {titleText} </CustomTitle>
                )}
              </Grid>
            ))}
          </CustomGrid>
        </Grid>
      </Grid>
    </RenderController>
  );
};

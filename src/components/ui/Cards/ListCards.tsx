import { Grid } from '@mui/material';
import { NewsProps } from '../../../types/news-props';
import { GeneralCard } from './GeneralCard';
import { RenderController } from '../RenderController';
import { CustomGrid } from './CustomStylesCard';

interface Props {
  dataArticles?: NewsProps[];
  isLoading: boolean;
  isError?: string;
  titleText?: string;
  headerContent?: React.ReactNode;
}

export const ListCards: React.FC<Props> = ({ dataArticles, isLoading, isError, headerContent }) => {
  return (
    <RenderController isLoading={isLoading} isError={isError} data={dataArticles}>
      <Grid sx={{ flexGrow: 1, margin: '10px 0px' }}>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <CustomGrid container spacing={3}>
            {headerContent}
            {dataArticles?.map((article) => (
              <Grid key={article.uuid} item>
                <GeneralCard dataArticle={article} />
              </Grid>
            ))}
          </CustomGrid>
        </Grid>
      </Grid>
    </RenderController>
  );
};

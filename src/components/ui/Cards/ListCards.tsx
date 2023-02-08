import { Grid } from '@mui/material';
import { NewsProps } from '../../../types/news-props';
import { GeneralCard } from './GeneralCard';
import { RenderController } from '../RenderController';
import { CustomGrid } from './CustomStylesCard';
import { ContainerHeader } from './Header';

interface Props {
  dataArticles?: NewsProps[];
  isLoading: boolean;
  isError?: string;
  headerTitle?: string;
}

export const ListCards: React.FC<Props> = ({ dataArticles, isLoading, isError, headerTitle }) => {
  return (
    <RenderController isLoading={isLoading} isError={isError} data={dataArticles}>
      <Grid sx={{ flexGrow: 1, margin: '10px 0px' }}>
        <ContainerHeader headerTitle={headerTitle} />
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <CustomGrid container spacing={3}>
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

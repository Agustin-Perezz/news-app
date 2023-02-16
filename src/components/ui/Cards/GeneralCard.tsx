import { CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { NewsProps } from '../../../types/news-props';
import { CategoriesArticles } from './Categories';
import { CustomCard, CustomChip } from './CustomStylesCard';
import { useLoadImage } from '../../../hooks';

import load_image from '../../../assets/images/load-image.jpg';

interface Props {
  dataArticle: NewsProps;
}

export const GeneralCard: React.FC<Props> = ({ dataArticle }) => {
  const { loaded, onError, onLoad } = useLoadImage();

  return (
    <CustomCard>
      <CardActionArea target="_blank" href={dataArticle.url} sx={{ height: '470px' }}>
        <Box sx={{ position: 'relative' }}>
          <img
            style={{ height: '185px' }}
            onLoad={onLoad}
            alt={dataArticle.nameSource}
            src={loaded ? dataArticle.image_url : load_image}
            onError={({ currentTarget }) => onError({ currentTarget })}
          />
          <CustomChip label={dataArticle.published_at} />
        </Box>
        <CardContent>
          <Typography data-testid="card-title" variant="subtitle1">
            {dataArticle.title}
          </Typography>
          <Typography data-testid="card-description" variant="body2" color="text.secondary">
            {dataArticle.description}
          </Typography>
          {dataArticle.categories && <CategoriesArticles listCategories={dataArticle.categories} />}
          {dataArticle.nameSource && (
            <Box sx={{ display: 'flex', marginTop: '10px' }}>
              <Typography variant="subtitle2" mr={1}>
                Source:
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '1.57' }}>
                {dataArticle.nameSource}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

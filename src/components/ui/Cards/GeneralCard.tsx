import React from 'react';
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from '@mui/material';
import { NewsProps } from '../../../types/news-props';
import { CategoriesArticles } from './Categories';
import { useLoadImage } from '../../../hooks';

import not_found from '../../../assets/images/not-found-image.png';
import load_image from '../../../assets/images/load-image.jpg';
import { CustomCard, CustomChip } from './customStyleCard';

interface Props {
  dataArticle: NewsProps;
}

export const GeneralCard: React.FC<Props> = ({ dataArticle }) => {
  const { loaded, setLoaded } = useLoadImage();

  return (
    <CustomCard>
      <CardActionArea
        target="_blank"
        href={dataArticle.url}
        sx={{ minHeight: 'inherit' }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="185px"
            image={loaded ? dataArticle.image_url : load_image}
            alt={dataArticle.nameSource}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = not_found;
            }}
            onLoad={() => {
              setLoaded(true);
            }}
          />
          <CustomChip label={dataArticle.published_at} />
        </Box>
        <CardContent>
          <Typography data-testid="card-title" variant="subtitle1">
            {dataArticle.title}
          </Typography>
          <Typography
            data-testid="card-description"
            variant="body2"
            color="text.secondary"
          >
            {dataArticle.description}
          </Typography>
          {dataArticle.categories && (
            <CategoriesArticles listCategories={dataArticle.categories} />
          )}
          {dataArticle.nameSource && (
            <Box sx={{ display: 'flex', marginTop: '10px' }}>
              <Typography variant="subtitle2" mr={1}>
                Source:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: '1.57' }}
              >
                {dataArticle.nameSource}
              </Typography>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
};

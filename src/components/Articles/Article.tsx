import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Box,
} from '@mui/material';
import { NewsProps } from '../../types/news-props';

interface Props {
  dataArticle: NewsProps;
}

export const Article: React.FC<Props> = ({ dataArticle }) => {
  return (
    <Card sx={{ maxHeight: 'auto', minHeight: '447px' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="auto"
          image={dataArticle.image_url}
          alt={dataArticle.nameSource}
          sx={{ maxHeight: '195px' }}
        />
        <Chip
          label="Date example"
          sx={{
            position: 'absolute',
            top: '8px',
            right: '5px',
            color: 'ghostwhite',
            backgroundColor: '#0A1929',
            opacity: '0.6',
            height: '29px',
            border: '1px solid #9393A5',
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="subtitle1">{dataArticle.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {dataArticle.description}
        </Typography>
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
    </Card>
  );
};

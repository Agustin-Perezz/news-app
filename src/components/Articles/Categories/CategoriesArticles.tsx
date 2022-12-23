import { Box, Chip, Typography } from '@mui/material';
import React from 'react';
import { CategoriesProps } from '../../../types';

interface Props {
  listCategories: CategoriesProps[];
}

export const CategoriesArticles: React.FC<Props> = ({ listCategories }) => {
  return (
    <Box
      sx={{
        justifyContent: 'flex-start',
        marginTop: '10px',
        flexWrap: 'nowrap',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ display: 'inline', marginRight: '5px' }}
      >
        Categories:
      </Typography>
      {listCategories.map((categori) => (
        <Chip
          label={categori.type}
          key={categori.color}
          sx={{
            color: categori.color,
            backgroundColor: '#0A1929',
            height: '25px',
            border: `1px solid ${categori.color}`,
            marginRight: '5px',
          }}
        />
      ))}
    </Box>
  );
};

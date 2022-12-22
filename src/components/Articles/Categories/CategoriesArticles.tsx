import { Box, Chip } from '@mui/material';
import React from 'react';
import { CategoriesProps } from '../../../types';

interface Props {
  listCategories: CategoriesProps[];
}

export const CategoriesArticles: React.FC<Props> = ({ listCategories }) => {
  return (
    <Box sx={{ justifyContent: 'flex-start', my: '2' }}>
      {listCategories.map((categori) => (
        <Chip
          label={categori.type}
          key={categori.color}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '5px',
            color: categori.color,
            backgroundColor: '#0A1929',
            height: '29px',
            border: `1px solid ${categori.color}`,
          }}
        />
      ))}
    </Box>
  );
};

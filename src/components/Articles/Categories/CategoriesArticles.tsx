import React from 'react';
import { Box, Typography } from '@mui/material';
import { CategoriesProps } from '../../../types';
import { Categori } from './Categori';

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
        <Categori categori={categori} key={categori.color} />
      ))}
    </Box>
  );
};

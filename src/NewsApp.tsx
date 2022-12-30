import React from 'react';
import { Container } from '@mui/material';
import { AppTheme } from './theme';
import { AppRouter } from './routes';

export const NewsApp: React.FC = () => {
  return (
    <AppTheme>
      <Container maxWidth="lg">
        <AppRouter />
      </Container>
    </AppTheme>
  );
};

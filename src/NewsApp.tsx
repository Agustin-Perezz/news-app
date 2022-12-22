import { Container } from '@mui/material';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { NewsProvider } from './context/NewsContext';
import { AppTheme } from './theme';

export const NewsApp: React.FC = () => {
  return (
    <AppTheme>
      <Container maxWidth="lg">
        <NewsProvider>
          <NavBar />
        </NewsProvider>
      </Container>
    </AppTheme>
  );
};

import React, { useContext } from 'react';
import { Container } from '@mui/material';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/SearchBar';
import { AppTheme } from './theme';
import { NewsContext } from './context/NewsContext';

export const NewsApp: React.FC = () => {
  const { getNewsByQuery } = useContext(NewsContext);
  return (
    <AppTheme>
      <Container maxWidth="lg">
        <NavBar />
        <SearchBar handleSubmit={getNewsByQuery} />
      </Container>
    </AppTheme>
  );
};

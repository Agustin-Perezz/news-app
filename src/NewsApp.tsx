import React, { useContext } from 'react';
import { Container, Divider } from '@mui/material';
import { NavBar } from './components/NavBar/NavBar';
import { SearchBar } from './components/SearchBar';
import { AppTheme } from './theme';
import { NewsContext } from './context/NewsContext';
import { ListArticles } from './components/Articles';

export const NewsApp: React.FC = () => {
  const { getNewsByQuery, isLoading, dataNews, isError } =
    useContext(NewsContext);
  return (
    <AppTheme>
      <Container maxWidth="lg">
        <NavBar />
        <Divider />
        <SearchBar handleSubmit={getNewsByQuery} />
        <ListArticles
          dataArticles={dataNews}
          isLoading={isLoading}
          isError={isError}
        />
      </Container>
    </AppTheme>
  );
};

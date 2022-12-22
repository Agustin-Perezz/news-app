import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { NewsProvider } from './context/NewsContext';
import { AppTheme } from './theme';

export const NewsApp: React.FC = () => {
  return (
    <AppTheme>
      <NewsProvider>
        <NavBar />
      </NewsProvider>
    </AppTheme>
  );
};

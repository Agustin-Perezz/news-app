import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { AppTheme } from './theme';

export const NewsApp: React.FC = () => {
  return (
    <AppTheme>
      <NavBar />
    </AppTheme>
  );
};

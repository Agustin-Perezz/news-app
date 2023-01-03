import React from 'react';
import { AppTheme } from './theme';
import { AppRouter } from './routes';

export const NewsApp: React.FC = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};

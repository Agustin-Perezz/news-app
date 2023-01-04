import React from 'react';
import { AppTheme } from './theme';
import { AppRouter } from './routes';

export const NewsApp: React.FC = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </div>
  );
};

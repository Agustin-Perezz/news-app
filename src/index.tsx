import React from 'react';
import ReactDOM from 'react-dom/client';
import { CacheProvider } from './context/CacheContext';
import { NewsProvider } from './context/NewsContext';
import { NewsApp } from './NewsApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CacheProvider>
      <NewsProvider>
        <NewsApp />
      </NewsProvider>
    </CacheProvider>
  </React.StrictMode>
);

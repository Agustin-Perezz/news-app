import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewsProvider } from './context/NewsContext';
import { NewsApp } from './NewsApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NewsProvider>
      <NewsApp />
    </NewsProvider>
  </React.StrictMode>
);

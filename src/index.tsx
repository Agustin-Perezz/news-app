import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewsApp } from './NewsApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <NewsApp />
  </React.StrictMode>
);

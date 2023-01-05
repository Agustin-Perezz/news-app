import { Divider } from '@mui/material';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HeaderPage } from '../pages/Header';
import { routes } from './router';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename="/news-app">
      <HeaderPage />
      <Divider />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

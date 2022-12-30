import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { routes } from './router';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter basename="/news-app-two/">
      <NavBar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

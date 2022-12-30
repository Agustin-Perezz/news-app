import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HeaderPage } from '../pages/Search';
import { routes } from './router';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename="/news-app-two">
      <HeaderPage />
      <Routes>
        <Route key="test" path="/" element={<h2>home test</h2>} />
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

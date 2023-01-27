import React from 'react';
import { NavBar } from './NavBar';
import { CategoryProvider } from '../../../context/CategoryContext';

const HeaderPage: React.FC = () => {
  return (
    <CategoryProvider>
      <NavBar />
    </CategoryProvider>
  );
};

export default HeaderPage;

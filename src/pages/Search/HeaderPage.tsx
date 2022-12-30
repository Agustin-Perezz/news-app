import { Divider } from '@mui/material';
import { useContext } from 'react';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';
import { NewsContext } from '../../context/NewsContext';

const HeaderPage: React.FC = () => {
  const { getNewsByQuery } = useContext(NewsContext);
  return (
    <>
      <NavBar />
      <Divider />
      <SearchBar handleSubmit={getNewsByQuery} />
    </>
  );
};

export default HeaderPage;

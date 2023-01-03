import { Divider } from '@mui/material';
import { useContext } from 'react';
import { NavBar } from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import { NewsContext } from '../../context/NewsContext';

const HeaderPage: React.FC = () => {
  const { setState } = useContext(NewsContext);
  return (
    <div style={{ backgroundColor: '#313131' }}>
      <NavBar />
      <Divider />
      {/* <SearchBar handleSubmit={getNewsByQuery} /> */}
    </div>
  );
};

export default HeaderPage;

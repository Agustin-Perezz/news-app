import { ImageListItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SearchBar } from './SearchBar';
import { SocialMedia } from '../ui/SocialMedia';
import { CategoriesNavBar } from './CategoriesNavBar';
import { NavBarDrawer } from './Drawer';
import { CustomBoxContainer, CustomNavBarBox } from './CustomStyleNavBar';
import { CategoryProvider } from '../../context/CategoryContext';
import { useSearch } from '../../hooks';

import news_logo from '../../assets/images/news-logo.png';

export const NavBar: React.FC = () => {
  const { handleSubmit } = useSearch();
  const matches = useMediaQuery('(max-width:1000px)');

  return (
    <CategoryProvider>
      <CustomBoxContainer>
        <CustomNavBarBox>
          {matches ? (
            <NavBarDrawer handleSubmit={handleSubmit} />
          ) : (
            <ImageListItem sx={{ maxWidth: '130px' }}>
              <img src={news_logo} alt="news-logo" />
            </ImageListItem>
          )}
          <SearchBar handleSubmit={handleSubmit} />
          {!matches && <SocialMedia />}
        </CustomNavBarBox>
        {!matches && <CategoriesNavBar handleClick={handleSubmit} />}
      </CustomBoxContainer>
    </CategoryProvider>
  );
};

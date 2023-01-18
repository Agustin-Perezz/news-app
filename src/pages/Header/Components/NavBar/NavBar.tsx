import { useContext } from 'react';
import { ImageListItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { SearchBar } from '../SearchBar';
import { CategoriesNavBar } from '../CategoriesNavBar';
import { SocialMedia } from '../../../../components/ui/SocialMedia';
import { useSearch } from '../../hooks';
import { CategoryContext } from '../../../../context/CategoryContext';

import news_logo from '../../../../assets/images/news-logo.png';
import { NavBarDrawer } from '../Drawer';
import { CustomBoxContainer, CustomNavBarBox } from './CustomStylesNavBar';

export const NavBar: React.FC = () => {
  const { activeCategory, handleSetTab } = useContext(CategoryContext);
  const { handleSubmit } = useSearch();
  const matches = useMediaQuery('(max-width:1000px)');

  return (
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
      {!matches && (
        <CategoriesNavBar
          handleClick={handleSubmit}
          handleSetTab={handleSetTab}
          activeCategoryTab={activeCategory}
        />
      )}
    </CustomBoxContainer>
  );
};

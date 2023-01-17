import { useContext } from 'react';
import Box from '@mui/material/Box';
import { ImageListItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { SearchBar } from '../SearchBar';
import { CategoriesNavBar } from '../CategoriesNavBar';
import { CustomStack } from '../../../../components/ui/CustomStack';
import { SocialMedia } from '../../../../components/ui/SocialMedia';
import { useSearch } from '../../hooks';
import { CategoryContext } from '../../../../context/CategoryContext';

import news_logo from '../../../../assets/images/news-logo.png';
import { NavBarDrawer } from '../Drawer';

export const NavBar: React.FC = () => {
  const { handleChangeTab, activeCategoryTab } = useContext(CategoryContext);
  const { handleSubmit } = useSearch();
  const matches = useMediaQuery('(max-width:1000px)');

  return (
    <Box
      sx={{
        backgroundColor: '#292929',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'max-content',
        flexWrap: 'wrap',
        paddingTop: '20px',
      }}
    >
      <CustomStack
        stackProps={{
          direction: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1000px',
        }}
      >
        <ImageListItem sx={{ width: 150 }}>
          <img src={news_logo} alt="news-logo" />
        </ImageListItem>
        <SearchBar handleSubmit={handleSubmit} />
        <SocialMedia />
      </CustomStack>
      {matches ? (
        <NavBarDrawer handleSubmit={handleSubmit} />
      ) : (
        <CategoriesNavBar
          handleClick={handleSubmit}
          handleChangeTab={handleChangeTab}
          activeCategoryTab={activeCategoryTab}
        />
      )}
    </Box>
  );
};

import Box from '@mui/material/Box';
import { ImageListItem } from '@mui/material';
import { SearchBar } from '../SearchBar';
import { CategoriesNavBar } from '../CategoriesNavBar';
import { CustomStack } from '../../../../components/CustomStack';
import { SocialMedia } from '../../../../components/ui/SocialMedia';
import { useSearch } from '../../hooks';

import news_logo from '../../../../assets/images/news-logo.png';

export const NavBar: React.FC = () => {
  const { handleSubmit } = useSearch();
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
      <CategoriesNavBar handleClick={handleSubmit} />
    </Box>
  );
};

import Box from '@mui/material/Box';
import { ImageListItem } from '@mui/material';
import { CustomStack } from '../CustomStack';
import { SocialMedia } from '../ui/SocialMedia';
import { SearchBar } from '../SearchBar';

import news_logo from '../../assets/images/news-logo.png';

export const NavBar: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#292929',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '120px',
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
        <SearchBar />
        <SocialMedia />
      </CustomStack>
    </Box>
  );
};

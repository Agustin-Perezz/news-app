import { ImageListItem } from '@mui/material';
import { CustomStack } from '../CustomStack';
import { SocialMedia } from '../ui/SocialMedia';
import { SearchBar } from '../SearchBar';

import news_logo from '../../assets/images/news-logo.png';

export const NavBar: React.FC = () => {
  return (
    <CustomStack
      stackProps={{
        direction: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#313131',
      }}
    >
      <ImageListItem sx={{ width: 190 }}>
        <img src={news_logo} alt="news-logo" />
      </ImageListItem>
      <SearchBar />
      <SocialMedia />
    </CustomStack>
  );
};

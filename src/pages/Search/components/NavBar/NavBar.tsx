import { useContext } from 'react';
import { ImageListItem, Typography } from '@mui/material';
import { CustomStack } from '../../../../components/CustomStack';
import { SocialMedia } from '../../../../components/ui/SocialMedia';
import { SearchBar } from '../SearchBar';
import { NewsContext } from '../../../../context/NewsContext';

import news_logo from '../../../../assets/images/news-logo.png';

export const NavBar: React.FC = () => {
  return (
    <CustomStack
      stackProps={{
        direction: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: -1.5,
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

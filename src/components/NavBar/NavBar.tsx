import { ImageListItem, Typography } from '@mui/material';
import { CustomStack } from '../CustomStack';

import news_logo from '../../assets/images/news-logo.png';
import { SocialMedia } from '../ui/SocialMedia';

export const NavBar: React.FC = () => {
  return (
    <CustomStack
      stackProps={{
        direction: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: -1.5,
      }}
    >
      <ImageListItem sx={{ width: 190 }}>
        <img src={news_logo} alt="news-logo" />
      </ImageListItem>
      <Typography color="#686975" variant="h6">
        The power of information
      </Typography>
      <SocialMedia />
    </CustomStack>
  );
};

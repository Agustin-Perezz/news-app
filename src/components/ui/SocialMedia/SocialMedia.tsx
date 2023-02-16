import { Avatar } from '@mui/material';
import { dataMedia } from './data-media';
import { CustomStack } from '../CustomStack';

export const SocialMedia: React.FC = () => {
  return (
    <CustomStack
      stackProps={{
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'row',
        margin: '0',
      }}
    >
      {dataMedia.map((media) => (
        <a href={media.url} target="_black" key={media.alt}>
          <Avatar {...media}>{media.icon}</Avatar>
        </a>
      ))}
    </CustomStack>
  );
};

import { Avatar } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
      <a href={dataMedia[0].url} target="_black">
        <Avatar {...dataMedia[0]}>
          <GitHubIcon />
        </Avatar>
      </a>
      <a href={dataMedia[1].url} target="_black">
        <Avatar {...dataMedia[1]}>
          <LinkedInIcon />
        </Avatar>
      </a>
      <a href={dataMedia[2].url} target="_black">
        <Avatar {...dataMedia[2]}>
          <TwitterIcon />
        </Avatar>
      </a>
    </CustomStack>
  );
};

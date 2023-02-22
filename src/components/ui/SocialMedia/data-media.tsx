import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

type MediaProps = {
  variant?: 'circular' | 'square' | 'rounded';
  alt?: string;
  url: string;
  sx?: SxProps<Theme>;
  icon: JSX.Element;
};

const sx = {
  marginRight: 1,
  '&:hover': { backgroundColor: 'rgb(170, 170, 170, 210)' },
};

export const dataMedia: MediaProps[] = [
  {
    alt: 'github-icon',
    variant: 'circular',
    icon: <GitHubIcon />,
    url: 'https://github.com/Agustin-Perezz',
    sx,
  },
  {
    alt: 'linkedin-icon',
    variant: 'circular',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/agustinperez-front-end-developer/',
    sx,
  },
  {
    alt: 'twitter-icon',
    variant: 'circular',
    icon: <TwitterIcon />,
    url: 'https://twitter.com/agustinperez__',
    sx,
  },
];

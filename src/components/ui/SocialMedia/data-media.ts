import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

type MediaProps = {
  variant?: 'circular' | 'square' | 'rounded';
  alt?: string;
  url: string;
  sx?: SxProps<Theme>;
  test?: JSX.Element;
};

export const dataMedia: MediaProps[] = [
  {
    alt: 'github-icon',
    variant: 'circular',
    url: 'https://github.com/Agustin-Perezz',
    sx: {
      marginRight: 1,
      '&:hover': {
        backgroundColor: 'rgb(170, 170, 170, 210)',
      },
    },
  },
  {
    alt: 'linkedin-icon',
    variant: 'circular',
    url: 'https://www.linkedin.com/in/agustinperez-front-end-developer/',
    sx: {
      marginRight: 1,
      '&:hover': {
        backgroundColor: 'rgb(170, 170, 170, 210)',
      },
    },
  },
  {
    alt: 'twitter-icon',
    variant: 'circular',
    url: 'https://twitter.com/agustinperez__',
    sx: {
      '&:hover': {
        backgroundColor: 'rgb(170, 170, 170, 210)',
      },
    },
  },
];

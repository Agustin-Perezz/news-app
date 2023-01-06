import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#3f3f3f',
    },
    secondary: { main: '#2475C7' },
  },
});

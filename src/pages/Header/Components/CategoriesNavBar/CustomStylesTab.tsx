import { styled, createTheme } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';

export const tabFont = createTheme({
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
  },
  palette: { secondary: { main: '#2475C7' } },
});

export const CustomTab = styled(MuiTab)(() => ({
  '&.MuiTab-root:nth-of-type(1)': {
    display: 'none !important',
  },
  '&:hover': {
    color: '#FFFFFF',
  },
  '&.Mui-selected': {
    color: 'white',
  },
  color: '#9299A0',
  textTransform: 'capitalize',
  fontSize: '15px',
  padding: '5px 14px 0px 14px',
}));

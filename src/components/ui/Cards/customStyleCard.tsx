import { styled, createTheme } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';

export const tabFont = createTheme({
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
  },
  palette: { secondary: { main: '#2475C7' } },
});

export const CustomCard = styled(MuiCard)(() => ({
  '&:hover': {
    boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.8)',
    transform: 'scale(1.02)',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',
  },
  maxHeight: 'auto',
  minHeight: '447px',
  width: '278px',
}));

export const CustomChip = styled(MuiChip)(() => ({
  position: 'absolute',
  top: '8px',
  right: '5px',
  color: 'ghostwhite',
  backgroundColor: '#0A1929',
  opacity: '0.6',
  height: '29px',
  border: '1px solid #9393A5',
}));

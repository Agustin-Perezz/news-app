import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

export const CustomBoxContainer = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '12px auto',
  width: '280px',
  '@media (min-width: 576px)': {
    width: '585px',
  },
  '@media (min-width: 881px)': {
    width: '885px',
  },
}));

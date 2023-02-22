import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

export const CustomBoxHeader = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '-15px',
  width: '275px',
  '.MuiFormControl-root': { display: 'none' },
  '@media (min-width: 576px)': {
    width: '582px',
    '.MuiFormControl-root': { display: 'flex' },
  },
  '@media (min-width: 881px)': {
    width: '880px',
    '.MuiFormControl-root': { display: 'flex' },
  },
}));

import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

export const CustomBoxHeader = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '10px',
  marginTop: '30px',
  width: '295px',
  '.MuiFormControl-root': { display: 'none' },
  '@media (min-width: 576px)': {
    width: '600px',
    '.MuiFormControl-root': { display: 'flex' },
  },
  '@media (min-width: 881px)': {
    width: '898px',
    '.MuiFormControl-root': { display: 'flex' },
  },
}));

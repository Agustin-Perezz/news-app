import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

export const CustomCountryBox = styled(MuiBox)(() => ({
  padding: '3px 4px',
  margin: '5px 0px 5px 5px',
  border: '1px solid #45454b',
  borderRadius: '5px',
  '&:hover': {
    cursor: 'pointer',
    border: '1px solid #8a8a90',
  },
}));

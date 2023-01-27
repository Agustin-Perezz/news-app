import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

export const CustomBoxContainer = styled(MuiBox)(() => ({
  backgroundColor: '#292929',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'max-content',
  flexWrap: 'wrap',
  paddingTop: '20px',
}));

export const CustomNavBarBox = styled(MuiBox)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  margin: '0px 0px 20px 0px',
  '@media (min-width: 1003px)': {
    width: '880px',
    justifyContent: 'space-around',
  },
}));

import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiCloseIcon from '@mui/icons-material/Close';

export const CustomModalBox = styled(MuiBox)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  bgcolor: '#1c232c',
  boxShadow: '24',
  borderRadius: '8px',
  border: '1px solid #454663',
  padding: '12px 10px',
  backgroundColor: '#1c1c23',
}));

export const CustomCloseIcon = styled(MuiCloseIcon)(() => ({
  fill: '#887e7e',
  padding: '2px',
  background: '#3f3f3f',
  borderRadius: '50%',
  '&:hover': { fill: '#a54b4b', cursor: 'pointer', border: '1px solid #826D6D' },
  position: 'absolute',
  top: '15px',
  right: '25px',
  height: '28px',
  width: '28px',
}));

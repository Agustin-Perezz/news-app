import { styled } from '@mui/material/styles';
import MuiBox from '@mui/material/Box';

export const CustomModalBox = styled(MuiBox)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  bgcolor: '#1c232c',
  boxShadow: '24',
  borderRadius: '8px',
  border: '1px solid #454663 !important',
  padding: '12px 10px',
  backgroundColor: '#272727',
}));

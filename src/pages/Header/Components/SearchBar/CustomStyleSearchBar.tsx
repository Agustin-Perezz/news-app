import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import MuiButton from '@mui/material/Button';
import MuiBox from '@mui/material/Box';

export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '11px',
  borderInlineColor: 'FFFFFF',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  marginRight: theme.spacing(2),
  margin: '0px !important',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const CustomButton = styled(MuiButton)(({ theme }) => ({
  height: '100%',
  backgroundColor: alpha(theme.palette.common.black, 0.0),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.0),
  },
  borderRadius: '50%',
  width: '10px',
  minWidth: '10px',
  padding: '0px',
  marginLeft: '28px',
  verticalAlign: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: '48px',
  color: 'inherit',
  borderColor: '#FFFFFF',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: '10px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export const CustomBox = styled(MuiBox)(() => ({
  minWidth: '285px',
  maxWidth: '480px',
  width: '100%',
  marginRight: '10px',
}));

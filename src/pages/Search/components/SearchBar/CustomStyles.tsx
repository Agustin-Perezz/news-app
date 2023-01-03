import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import MuiButton from '@mui/material/Button';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '11px',
  borderInlineColor: 'FFFFFF',
  backgroundColor: alpha(theme.palette.common.white, 0.18),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CustomButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '50$',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: '48px',
  color: 'inherit',
  borderColor: '#FFFFFF',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

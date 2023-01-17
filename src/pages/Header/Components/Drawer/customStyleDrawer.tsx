import { styled } from '@mui/material/styles';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';

export const CustomListItemButton = styled(MuiListItemButton)(() => ({
  '&.Mui-selected': {
    color: 'white',
  },
  color: '#9299A0',
  textTransform: 'capitalize',
}));

export const CustomListItemIcon = styled(MuiListItemIcon)(() => ({
  '&.Mui-selected': {
    color: 'white',
  },
  color: '#9299A0',
  minWidth: '48px',
}));

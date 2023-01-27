import { styled } from '@mui/material/styles';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import MuiListItem from '@mui/material/ListItem';

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

export const CustomListItem = styled(MuiListItem)(() => ({
  '&:nth-of-type(1)': {
    display: 'none !important',
  },
  padding: '3px 8px 3px 8px',
}));

import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { HandleClickDrawerProps } from '../../../../types';

type Props = HandleClickDrawerProps & {
  text: string;
  icon: JSX.Element;
  activeCategoryDrawer: string;
};

export const DrawerCategory: React.FC<Props> = ({
  icon,
  text,
  activeCategoryDrawer,
  handleClickDrawer,
}) => {
  return (
    <ListItemButton
      selected={activeCategoryDrawer === text}
      onClick={(event) => {
        handleClickDrawer(event, text);
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

import React from 'react';
import { ListItemText } from '@mui/material';
import { HandleClickDrawerProps } from '../../../../types';
import { CustomListItemButton, CustomListItemIcon } from './customStyleDrawer';

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
    <CustomListItemButton
      selected={activeCategoryDrawer === text}
      onClick={(event) => {
        handleClickDrawer(event, text);
      }}
    >
      <CustomListItemIcon
        className={activeCategoryDrawer === text ? 'Mui-selected' : undefined}
      >
        {icon}
      </CustomListItemIcon>
      <ListItemText primary={text} />
    </CustomListItemButton>
  );
};

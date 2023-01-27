import React from 'react';
import { ListItemText } from '@mui/material';
import { HandleSetTabProps } from '../../../../types';
import { CustomListItemButton, CustomListItemIcon } from './customStyleDrawer';

type Props = HandleSetTabProps & {
  text: string;
  icon: JSX.Element;
  idxCategory: number;
  activeCategory: number;
};

export const DrawerCategory: React.FC<Props> = ({
  icon,
  text,
  idxCategory,
  activeCategory,
  handleSetTab,
}) => {
  return (
    <CustomListItemButton
      selected={activeCategory === idxCategory}
      onClick={(event) => {
        handleSetTab(event, idxCategory);
      }}
    >
      <CustomListItemIcon>{icon}</CustomListItemIcon>
      <ListItemText primary={text} />
    </CustomListItemButton>
  );
};

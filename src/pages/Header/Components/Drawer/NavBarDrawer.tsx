import React from 'react';
import { Drawer, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { DrawerCategories } from './DrawerCategories';
import { useDrawer } from '../../hooks';
import { HandleSubmitProps } from '../../../../types';

export const NavBarDrawer: React.FC<HandleSubmitProps> = ({ handleSubmit }) => {
  const { open, handleSet } = useDrawer();
  return (
    <>
      <Drawer
        open={open}
        onClose={handleSet}
        anchor="left"
        PaperProps={{
          sx: { width: '70%' },
        }}
      >
        <DrawerCategories handleClick={handleSubmit} handleSet={handleSet} />
      </Drawer>
      <IconButton onClick={handleSet}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

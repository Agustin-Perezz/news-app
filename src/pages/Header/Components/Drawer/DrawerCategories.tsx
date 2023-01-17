import React, { useContext } from 'react';
import { List, ListItem } from '@mui/material';
import { DrawerCategory } from './DrawerCategory';
import { listCategories } from '../CategoriesNavBar';
import { drawerIcons } from './drawerIcons';
import { CategoryContext } from '../../../../context/CategoryContext';
import { HandleClickProps } from '../../../../types';

export const DrawerCategories: React.FC<HandleClickProps> = ({
  handleClick,
}) => {
  const { activeCategoryDrawer, handleClickDrawer } =
    useContext(CategoryContext);
  return (
    <List>
      {listCategories.map(({ category, endpoint, url }, idx) => (
        <ListItem
          key={category}
          onClick={() => {
            handleClick({ urlParameter: category, endpoint, navigateUrl: url });
          }}
        >
          <DrawerCategory
            icon={drawerIcons[idx].icon}
            text={category}
            activeCategoryDrawer={activeCategoryDrawer}
            handleClickDrawer={handleClickDrawer}
          />
        </ListItem>
      ))}
    </List>
  );
};

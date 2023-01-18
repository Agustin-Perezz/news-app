import React, { useContext } from 'react';
import { List, ListItem } from '@mui/material';
import { DrawerCategory } from './DrawerCategory';
import { listCategories } from '../CategoriesNavBar';
import { drawerIcons } from './drawerIcons';
import { CategoryContext } from '../../../../context/CategoryContext';
import { HandleClickProps } from '../../../../types';

type Props = HandleClickProps & { handleSet: () => void };

export const DrawerCategories: React.FC<Props> = ({ handleClick, handleSet }) => {
  const { activeCategory, handleSetTab } = useContext(CategoryContext);

  return (
    <List>
      {listCategories.map(({ category, endpoint, url }, idx) => (
        <ListItem
          sx={{ padding: '3px 8px 3px 8px' }}
          key={category}
          onClick={() => {
            handleClick({ urlParameter: category, endpoint, navigateUrl: url });
            handleSet();
          }}
        >
          <DrawerCategory
            icon={drawerIcons[idx].icon}
            text={category}
            idxCategory={idx}
            handleSetTab={handleSetTab}
            activeCategory={activeCategory}
          />
        </ListItem>
      ))}
    </List>
  );
};

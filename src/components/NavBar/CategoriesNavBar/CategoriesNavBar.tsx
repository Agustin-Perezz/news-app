import { useContext } from 'react';
import { Box, Tabs, ThemeProvider } from '@mui/material';
import { listCategories } from './listCategories';
import { CustomTab, tabFont } from './CustomStylesTab';
import { HandleClickProps } from '../../../types';
import { CategoryContext } from '../../../context/CategoryContext';

export const CategoriesNavBar: React.FC<HandleClickProps> = ({ handleClick }) => {
  const { activeCategory, handleSetTab } = useContext(CategoryContext);
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'GrayText',
          justifyContent: 'center',
          margin: '0 auto',
          display: 'flex',
        }}
      >
        <ThemeProvider theme={tabFont}>
          <Tabs
            value={activeCategory}
            onChange={handleSetTab}
            aria-label="category-tabs"
            indicatorColor="secondary"
          >
            {listCategories.map(({ category, endpoint, url }) => (
              <CustomTab
                label={category}
                key={category}
                onClick={() => {
                  handleClick({
                    urlParameter: category,
                    endpoint,
                    navigateUrl: url,
                  });
                }}
              />
            ))}
          </Tabs>
        </ThemeProvider>
      </Box>
    </Box>
  );
};

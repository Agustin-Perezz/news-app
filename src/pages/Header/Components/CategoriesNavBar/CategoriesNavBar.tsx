import { Box, Tabs, ThemeProvider, Tab } from '@mui/material';
import { listCategories } from './listCategories';
import { CustomTab, tabFont } from './CustomStyleTab';
import { HandleClickProps, HandleSetTabProps } from '../../../../types';

type Props = HandleClickProps & HandleSetTabProps & { activeCategoryTab: number };

export const CategoriesNavBar: React.FC<Props> = ({
  handleClick,
  handleSetTab,
  activeCategoryTab,
}) => {
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
            value={activeCategoryTab}
            onChange={handleSetTab}
            aria-label="category-tabs"
            indicatorColor="secondary"
          >
            <Tab label="default-tab" sx={{ display: 'none' }} />
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

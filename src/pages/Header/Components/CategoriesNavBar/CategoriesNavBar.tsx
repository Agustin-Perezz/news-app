import { Box, Tabs, ThemeProvider, Tab } from '@mui/material';
import { listCategories } from './listCategories';
import { SubmitProps, useTab } from '../../hooks';
import { CustomTab, tabFont } from './customStyleTab';

type Props = {
  handleClick: ({
    navigateUrl,
    endpoint,
    urlParameter,
  }: SubmitProps) => Promise<void>;
};

export const CategoriesNavBar: React.FC<Props> = ({ handleClick }) => {
  const { valueTab, handleChange } = useTab({ handleClick });

  return (
    <Box sx={{ width: '100%', marginTop: '15px' }}>
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
            value={valueTab}
            onChange={handleChange}
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

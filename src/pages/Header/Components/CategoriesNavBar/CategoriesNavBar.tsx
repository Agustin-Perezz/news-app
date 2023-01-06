import React from 'react';
import { Box, Tabs, ThemeProvider } from '@mui/material';
import { listCategories } from './listCategories';
import { useTab } from '../../hooks';
import { SubmitProps } from '../../../../hooks';
import { CustomTab, tabFont } from './customStyleTab';

const API_KEY = process.env.REACT_APP_API_KEY;

type Props = {
  handleClick: ({
    navigateUrl,
    endpoint,
    urlParameter,
  }: SubmitProps) => Promise<void>;
};

export const CategoriesNavBar: React.FC<Props> = ({ handleClick }) => {
  const { valueTab, handleChange } = useTab();

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
            {listCategories.map(({ category }) => (
              <CustomTab
                label={category}
                key={category}
                onClick={() => {
                  handleClick({
                    urlParameter: category,
                    endpoint: `/top?api_token=${API_KEY}&categories=${category}`,
                    navigateUrl: `search?q=${category}`,
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

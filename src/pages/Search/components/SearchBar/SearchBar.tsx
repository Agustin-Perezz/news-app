import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { useForm, useSearchBar } from '../../../../hooks';
import { Search, StyledInputBase, CustomButton } from './CustomStyles';

export const SearchBar: React.FC = () => {
  const { onChange, query } = useForm('');
  const { handleSubmit } = useSearchBar();

  return (
    <Box
      sx={{ width: '500px' }}
      component="form"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit(query);
      }}
    >
      <Search>
        <CustomButton startIcon={<SearchIcon />} />
        <StyledInputBase
          placeholder="Search any news.."
          inputProps={{
            inputMode: 'search',
          }}
          type="input"
          onChange={(event) => onChange({ event })}
        />
      </Search>
    </Box>
  );
};

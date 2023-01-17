import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { Search, StyledInputBase, CustomButton } from './CustomStyles';
import { useForm } from '../../hooks';
import { HandleSubmitProps } from '../../../../types';

const API_KEY = process.env.REACT_APP_API_KEY;

export const SearchBar: React.FC<HandleSubmitProps> = ({ handleSubmit }) => {
  const { onChange, query } = useForm('');

  return (
    <Box
      sx={{ width: '500px', margin: '0px 40px' }}
      component="form"
      onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit({
          urlParameter: query,
          endpoint: `/all?api_token=${API_KEY}&search=${query}`,
          navigateUrl: `search?q=${query}`,
        });
      }}
    >
      <Search>
        <CustomButton type="submit" startIcon={<SearchIcon />} />
        <StyledInputBase
          placeholder="Search any news.."
          inputProps={{
            inputMode: 'search',
          }}
          type="input"
          onChange={(event) => onChange(event.target.value)}
        />
      </Search>
    </Box>
  );
};

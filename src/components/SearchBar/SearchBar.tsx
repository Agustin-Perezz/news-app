import React from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './CustomStyles';
import { useForm } from '../../hooks';

type Props = {
  handleSubmit: (query: string) => void;
};

export const SearchBar: React.FC<Props> = ({ handleSubmit }) => {
  const { onChange, query } = useForm('');

  return (
    <Box
      width={300}
      margin="auto"
      marginTop={3}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(query);
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
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

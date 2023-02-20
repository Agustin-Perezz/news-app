import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase, CustomButton, CustomBox } from './CustomStyleSearchBar';
import { useForm } from '../../../hooks';
import { HandleSubmitProps } from '../../../types';

export const SearchBar: React.FC<HandleSubmitProps> = ({ handleSubmit }) => {
  const { query, onChange, onSubmit } = useForm({ handleSubmit });

  return (
    <CustomBox component="form" onSubmit={onSubmit}>
      <Search>
        <CustomButton type="submit" startIcon={<SearchIcon />} />
        <StyledInputBase
          type="input"
          placeholder="Search any news.."
          value={query}
          inputProps={{ inputMode: 'search' }}
          onChange={(event) => onChange(event.target.value)}
        />
      </Search>
    </CustomBox>
  );
};

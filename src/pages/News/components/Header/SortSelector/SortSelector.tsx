import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useControllerSort } from '../../../hooks';
import { sortOptions } from './options-sort';

export const SortSelector: React.FC = () => {
  const { optionSort, onChange } = useControllerSort();

  return (
    <FormControl size="small" sx={{ m: 1, minWidth: 80 }}>
      <InputLabel>Sort by</InputLabel>
      <Select
        sx={{ padding: '5px 0px' }}
        label="Sort by"
        value={optionSort}
        onChange={onChange}
        autoWidth
      >
        {sortOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

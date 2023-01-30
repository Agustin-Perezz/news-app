import { Box } from '@mui/material';
import { HandleClickCountryProps } from '../../../types';
import { Country } from './Country';
import { dataCountries } from './dataCountries';

export const ListCountries: React.FC<HandleClickCountryProps> = ({ handleClickCountry }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {dataCountries.map(({ code, label }) => (
        <Country code={code} title={label} key={label} handleClickCountry={handleClickCountry} />
      ))}
    </Box>
  );
};

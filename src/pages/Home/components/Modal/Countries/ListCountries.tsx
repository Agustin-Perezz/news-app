import { Box } from '@mui/material';
import { Country } from './Country';
import { dataCountries } from './dataCountries';

export const ListCountries: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {dataCountries.map(({ code, label }) => (
        <Country code={code} title={label} key={label} />
      ))}
    </Box>
  );
};

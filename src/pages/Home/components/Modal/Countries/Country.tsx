import { Tooltip } from '@mui/material';
import { CustomCountryBox } from './CustomStylesCountry';

interface Props {
  code: string;
  title: string;
}

export const Country: React.FC<Props> = ({ code, title }) => {
  return (
    <CustomCountryBox>
      <Tooltip title={title} arrow>
        <img
          src={`https://flagcdn.com/36x27/${code}.png`}
          alt={title}
          style={{ verticalAlign: 'middle' }}
        />
      </Tooltip>
    </CustomCountryBox>
  );
};

import { Tooltip } from '@mui/material';
import { HandleClickCountryProps } from '../../../types';
import { CustomCountryBox } from './CustomStylesCountry';

type Props = HandleClickCountryProps & {
  code: string;
  title: string;
};

export const Country: React.FC<Props> = ({ code, title, handleClickCountry }) => {
  return (
    <CustomCountryBox onClick={() => handleClickCountry(code)}>
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

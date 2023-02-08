import { Typography } from '@mui/material/';
import { CustomBoxHeader } from './CustomStylesHeader';
import { SortSelector } from './SortSelector';

interface Props {
  headerTitle: string;
}

export const Header: React.FC<Props> = ({ headerTitle }) => {
  return (
    <CustomBoxHeader>
      <Typography sx={{ fontSize: '18px' }}>{headerTitle}</Typography>
      <SortSelector />
    </CustomBoxHeader>
  );
};

import { Typography } from '@mui/material/';
import { CustomBoxHeader } from './CustomStylesHeader';
import { HeaderSort } from './Sort';

interface Props {
  cardsTitle: string;
}

export const Header: React.FC<Props> = ({ cardsTitle }) => {
  return (
    <CustomBoxHeader>
      <Typography variant="h6">{cardsTitle}</Typography>
      <HeaderSort />
    </CustomBoxHeader>
  );
};

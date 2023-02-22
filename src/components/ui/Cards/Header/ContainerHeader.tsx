import { Typography } from '@mui/material';
import { CustomBoxContainer } from './CustomStylesContainer';

type Props = { headerTitle?: string };

export const ContainerHeader: React.FC<Props> = ({ headerTitle }) => {
  return (
    <CustomBoxContainer>
      <Typography sx={{ fontSize: '18px' }}>{headerTitle}</Typography>
    </CustomBoxContainer>
  );
};

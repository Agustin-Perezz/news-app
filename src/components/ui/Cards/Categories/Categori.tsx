import { Chip } from '@mui/material';
import { CategoriesProps } from '../../../../types';

interface Props {
  categori: CategoriesProps;
}

export const Categori: React.FC<Props> = ({ categori }) => {
  return (
    <Chip
      label={categori.type}
      sx={{
        color: categori.color,
        backgroundColor: '#0A1929',
        height: '25px',
        border: `1px solid ${categori.color}`,
        marginRight: '5px',
        marginBottom: '5px',
      }}
    />
  );
};

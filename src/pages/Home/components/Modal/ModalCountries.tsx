import { Fade, Modal, Typography, Divider } from '@mui/material';
import { CustomCloseIcon, CustomModalBox } from './CustomStylesModal';
import { ListCountries } from './Countries';

export const ModalCountries: React.FC = () => {
  return (
    <div>
      <Modal open={false} closeAfterTransition sx={{ backgroundColor: 'rgb(0 0 0 / 35%)' }}>
        <Fade in>
          <CustomModalBox>
            <Typography variant="h6" component="h2" pl={2}>
              Select your country.
            </Typography>
            <Divider sx={{ margin: '10px 9px 10px 12px' }} />
            <ListCountries />
            <CustomCloseIcon />
          </CustomModalBox>
        </Fade>
      </Modal>
    </div>
  );
};

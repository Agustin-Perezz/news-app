import { Fade, Modal, Typography, Divider, Backdrop } from '@mui/material';
import { CustomCloseIcon, CustomModalBox } from './CustomStylesModal';
import { ListCountries } from './Countries';
import { useModalController } from '../../hooks';

export const ModalCountries: React.FC = () => {
  const { open, onClose, handleClickCountry } = useModalController();
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ backgroundColor: 'rgb(0 0 0 / 35%)' }}
    >
      <Fade in={open}>
        <CustomModalBox>
          <Typography variant="h6" component="h2" pl={2}>
            Select your country.
          </Typography>
          <Divider sx={{ margin: '10px 9px 10px 12px' }} />
          <ListCountries handleClickCountry={handleClickCountry} />
          <CustomCloseIcon onClick={onClose} />
        </CustomModalBox>
      </Fade>
    </Modal>
  );
};

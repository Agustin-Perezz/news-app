import { Button, ButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useControllerSort } from '../../../../../hooks';
import { SortContent } from './SortContent';
import { options } from './options-sort';

export const HeaderSort: React.FC = () => {
  const { open, idxSelected, anchorRef, handleClick, handleMenuItemClick } = useControllerSort();

  return (
    <ButtonGroup variant="contained" ref={anchorRef}>
      <Button>{options[idxSelected]}</Button>
      <Button size="small" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        <ArrowDropDownIcon />
      </Button>
      <SortContent
        open={open}
        options={options}
        anchorRef={anchorRef}
        idxSelected={idxSelected}
        handleClick={handleClick}
        handleMenuItemClick={handleMenuItemClick}
      />
    </ButtonGroup>
  );
};

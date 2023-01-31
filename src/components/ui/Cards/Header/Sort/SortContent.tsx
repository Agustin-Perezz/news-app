import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { HandleMenuItemClickProps } from '../../../../../types';

type Props = HandleMenuItemClickProps & {
  open: boolean;
  options: string[];
  idxSelected: number;
  anchorRef: React.RefObject<HTMLDivElement>;
  handleClick: () => void;
};

export const SortContent: React.FC<Props> = ({
  open,
  options,
  anchorRef,
  idxSelected,
  handleMenuItemClick,
  handleClick,
}) => {
  return (
    <Popper sx={{ zIndex: '1' }} open={open} anchorEl={anchorRef.current} transition>
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper>
            <ClickAwayListener onClickAway={handleClick}>
              <MenuList autoFocusItem>
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === idxSelected}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

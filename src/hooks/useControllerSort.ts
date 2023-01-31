import React from 'react';

type SortState = { open: boolean; idxSelected: number };

export const useControllerSort = () => {
  const [sort, setSort] = React.useState<SortState>({ open: false, idxSelected: 1 });
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSort({ open: false, idxSelected: index });
  };

  const handleClick = () => {
    setSort((prev) => ({ ...prev, open: !prev.open }));
  };

  return { ...sort, anchorRef, handleMenuItemClick, handleClick };
};

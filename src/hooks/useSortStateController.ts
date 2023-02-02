import React from 'react';

export type SortState = { open: boolean; idxSelected: number };

export const useControllerSort = () => {
  const [sort, setSort] = React.useState<SortState>({ open: false, idxSelected: 0 });
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setSort((prev) => ({ ...prev, open: !prev.open }));
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSort({ open: false, idxSelected: index });
  };

  return { ...sort, anchorRef, handleMenuItemClick, handleClick };
};

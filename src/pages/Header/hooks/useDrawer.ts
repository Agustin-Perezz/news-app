import React from 'react';

export const useDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const handleSet = () => {
    setOpen(!open);
  };

  return { open, handleSet };
};

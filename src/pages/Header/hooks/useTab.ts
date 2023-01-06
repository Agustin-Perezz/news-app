import React from 'react';

export const useTab = () => {
  const [valueTab, setValueTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };
  return { valueTab, handleChange };
};

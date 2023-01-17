import React from 'react';
import { useLocation } from 'react-router-dom';

export const useTab = () => {
  const [valueTab, setValueTab] = React.useState(1);
  const { pathname } = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  React.useEffect(() => {
    if (pathname === '/search') {
      setValueTab(0);
    }
  }, [pathname]);

  return { valueTab, handleChange };
};

import { Location } from 'react-router-dom';

export const getCurrentPathname = (location: Location) => {
  const pathnames = location.pathname.split('/');
  if (location.pathname === '/' || pathnames[1] === 'home') {
    return 'home';
  }
  if (pathnames[1] === 'search') {
    return 'search';
  }

  const defaultPathname = pathnames[2];
  return defaultPathname;
};

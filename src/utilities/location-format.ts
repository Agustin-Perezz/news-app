import { Location } from 'react-router-dom';

export const formatLocation = (location: Location) => {
  const pathnames = location.pathname.split('/');
  let currenPathname;
  if (location.pathname === '/' || pathnames[1] === 'home') {
    currenPathname = 'home';
  } else if (pathnames[1] === 'search') {
    currenPathname = 'search';
  } else {
    const pathnameCategory = pathnames[2];
    currenPathname = pathnameCategory;
  }
  return { currenPathname, querySearch: location.search.substring(3, location.search.length) };
};

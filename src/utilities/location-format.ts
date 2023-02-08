import { Location } from 'react-router-dom';

export const formatLocation = (location: Location) => {
  const pathnames = location.pathname.split('/');
  let currenPathname;
  if (pathnames[1] === 'search') {
    currenPathname = 'search';
  } else {
    currenPathname = pathnames[1] !== 'home' ? pathnames[2] : 'home';
  }
  return { currenPathname, querySearch: location.search.substring(3, location.search.length) };
};

import { listCategories } from '../Components';

export const getPreviusCategory = (pathname: string) => {
  const result = pathname.split('/');
  const keyCategory = result[1] === 'home' ? 'home' : result[2];
  const idxOldCategory = listCategories.findIndex(
    (cat) => cat.category === keyCategory
  );

  return {
    keyCategory,
    idxOldCategory,
  };
};

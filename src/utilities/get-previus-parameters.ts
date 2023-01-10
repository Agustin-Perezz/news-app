import { listCategories } from '../pages/Header/Components/CategoriesNavBar';

export const getPreviusCategoryParameters = (pathname: string) => {
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

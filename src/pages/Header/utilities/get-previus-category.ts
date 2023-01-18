import { listCategories } from '../Components/CategoriesNavBar';

export const getPreviusCategory = (pathname: string) => {
  const result = pathname.split('/');
  const keyCategory = result[1] === 'home' ? 'home' : result[2];
  const idxOldCategory = listCategories.findIndex(
    (cat) => cat.category === keyCategory
  );

  return {
    keyCategory,
    idxOldCategory,
    previusCategory: {
      urlParameter: listCategories[idxOldCategory].category,
      endpoint: listCategories[idxOldCategory].endpoint,
      navigateUrl: listCategories[idxOldCategory].url,
    },
  };
};

import { listCategories } from '../Components/CategoriesNavBar';

export const getPreviusCategory = (pathname: string) => {
  const idxOldCategory = listCategories.findIndex((cat) => cat.category === pathname);

  return {
    keyCategory: pathname,
    idxOldCategory,
    previusCategory: {
      urlParameter: listCategories[idxOldCategory]?.category,
      endpoint: listCategories[idxOldCategory]?.endpoint,
      navigateUrl: listCategories[idxOldCategory]?.url,
    },
  };
};

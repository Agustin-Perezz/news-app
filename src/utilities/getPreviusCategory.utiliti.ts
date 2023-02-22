import { listCategories } from '../components/NavBar/CategoriesNavBar';

export const getPreviusCategory = (oldCategory: string) => {
  const indexOldCategory = listCategories.findIndex(({ category }) => category === oldCategory);

  return {
    keyCategory: oldCategory,
    idxOldCategory: indexOldCategory,
    previusCategory: {
      urlParameter: listCategories[indexOldCategory]?.category,
      endpoint: listCategories[indexOldCategory]?.endpoint,
      navigateUrl: listCategories[indexOldCategory]?.url,
    },
  };
};

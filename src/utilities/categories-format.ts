import { dataCategories } from '../components/ui/Cards/Categories';

export const categoriesFormat = (categories: string[]) => {
  return categories.map((type_categori) => {
    const indexCategory = dataCategories.findIndex(
      ({ type }) => type === type_categori
    );
    return dataCategories[indexCategory];
  });
};

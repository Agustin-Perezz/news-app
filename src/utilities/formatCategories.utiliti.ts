import { categoryColorsAccordingToType } from '../components/ui/Cards/Categories';
import { CategoriesProps } from '../types';

export const formatCategories = (categories: string[]): CategoriesProps[] => {
  return categories.map((typeCategori) => ({
    color: categoryColorsAccordingToType[typeCategori],
    type: typeCategori,
  }));
};

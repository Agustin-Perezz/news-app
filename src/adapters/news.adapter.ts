import { NewsProps, NewsResponseProps } from '../types/news-props';
import { categoriesFormat, dateFormat } from '../utilities';

export const createAddaptNew = (
  newResponse: NewsResponseProps
): NewsProps[] => {
  const listArticles: NewsProps[] = newResponse.data.map((data) => {
    const categories = categoriesFormat(data.categories);
    const dateFormated = dateFormat(data.published_at);
    return {
      uuid: data.uuid,
      title:
        data.title.length >= 80
          ? `${data.title.substring(0, 80)}...`
          : data.title,
      description: data.description,
      image_url: data.image_url,
      published_at: dateFormated,
      nameSource: data.source,
      url: data.url,
      categories: categories.length > 0 ? categories : undefined,
    };
  });

  return listArticles;
};

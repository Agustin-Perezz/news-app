import { NewsProps, NewsResponseProps } from '../types/news-props';

export const createAddaptNew = (
  newResponse: NewsResponseProps
): NewsProps[] => {
  const listArticles: NewsProps[] = newResponse.data.map((data) => {
    return {
      uuid: data.uuid,
      title: data.title,
      description: data.description,
      image_url: data.image_url,
      published_at: data.published_at,
      nameSource: data.source,
      categories: data.categories,
    };
  });

  return listArticles;
};

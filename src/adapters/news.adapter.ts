import { NewsProps, NewsResponseProps } from '../types/news-props';

export const createAddaptNew = (
  newResponse: NewsResponseProps
): NewsProps[] => {
  const listArticles: NewsProps[] = newResponse.data.map((data) => {
    const dateFormated = new Date(data.published_at).toLocaleDateString(
      'en-US'
    );
    return {
      uuid: data.uuid,
      title: data.title,
      description: data.description,
      image_url: data.image_url,
      published_at: dateFormated,
      nameSource: data.source,
      categories: data.categories,
    };
  });

  return listArticles;
};

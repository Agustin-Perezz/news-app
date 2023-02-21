import { NewsProps, NewsResponseProps } from '../types/news-props';
import { formatCategories, formatDate } from '../utilities';

export const formatNewsResponse = (newsResponse: NewsResponseProps): NewsProps[] => {
  const formattedNews = newsResponse?.data.map((information) => {
    const formattedCategories = formatCategories(information.categories);
    const formattedDate = formatDate(information.published_at);
    return {
      uuid: information.uuid,
      title:
        information.title.length >= 80
          ? `${information.title.substring(0, 80)}...`
          : information.title,
      description: information.description,
      image_url: information.image_url,
      published_at: formattedDate,
      nameSource: information.source,
      url: information.url,
      categories: formattedCategories,
    };
  });
  return formattedNews;
};

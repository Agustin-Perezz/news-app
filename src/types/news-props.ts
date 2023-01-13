export type NewsResponseProps = {
  meta: Meta;
  data: Article[];
};

type Article = {
  title: string;
  uuid: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
};

export type NewsProps = Omit<
  Article,
  | 'relevance_score'
  | 'keywords'
  | 'snippet'
  | 'language'
  | 'source'
  | 'categories'
> & {
  nameSource: string;
  categories?: CategoriesProps[];
};

export type CategoriesProps = {
  type: string;
  color: string;
};

type Meta = {
  found: number;
  returned: number;
  limit: number;
  page: number;
};

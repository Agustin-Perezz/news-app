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
  'relevance_score' | 'keywords' | 'snippet' | 'url' | 'language' | 'source'
> & {
  nameSource: string;
};

type Meta = {
  found: number;
  returned: number;
  limit: number;
  page: number;
};

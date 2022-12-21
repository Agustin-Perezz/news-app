export type NewsResponseProps = {
  meta: Meta;
  data: ArticleResponse[];
};

type ArticleResponse = {
  uuid: string;
  title: string;
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
  ArticleResponse,
  'relevance_score' | 'keywords' | 'snippet' | 'url' | 'language'
> & {
  nameSource: string;
};

type Meta = {
  found: number;
  returned: number;
  limit: number;
  page: number;
};

const API_KEY = process.env.REACT_APP_API_KEY;

export const listCategories = [
  {
    category: 'general',
    endpoint: `/top?api_token=${API_KEY}`,
    url: '/',
  },
  {
    category: 'science',
    endpoint: `/top?api_token=${API_KEY}&categories=science`,
    url: 'category/science',
  },
  {
    category: 'sports',
    endpoint: `/top?api_token=${API_KEY}&categories=sports`,
    url: 'category/sports',
  },
  {
    category: 'business',
    endpoint: `/top?api_token=${API_KEY}&categories=business`,
    url: 'category/business',
  },
  {
    category: 'health',
    endpoint: `/top?api_token=${API_KEY}&categories=health`,
    url: 'category/health',
  },
  {
    category: 'entertainment',
    endpoint: `/top?api_token=${API_KEY}&categories=entertainment`,
    url: 'category/entertainment',
  },
  {
    category: 'tech',
    endpoint: `/top?api_token=${API_KEY}&categories=tech`,
    url: 'category/tech',
  },
  {
    category: 'politics',
    endpoint: `/top?api_token=${API_KEY}&categories=politics`,
    url: 'category/politics',
  },
  {
    category: 'food',
    endpoint: `/top?api_token=${API_KEY}&categories=food`,
    url: 'category/food',
  },
  {
    category: 'travel',
    endpoint: `/top?api_token=${API_KEY}&categories=travel`,
    url: 'category/travel',
  },
];

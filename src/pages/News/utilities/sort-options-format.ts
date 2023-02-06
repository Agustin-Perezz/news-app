import { getDateSortOptions } from './date-options-format';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getSortParameters = (parameter: string, sortOption: string) => {
  const { dateOption } = getDateSortOptions(sortOption);

  const query =
    parameter.search('&') !== -1
      ? parameter.substring(3, parameter.search('&'))
      : parameter.substring(3, parameter.length);

  return {
    sortParamaters: {
      urlParameter: `${query}&published_after=${dateOption}`,
      endpoint: `/all?api_token=${API_KEY}&search=${query}&published_after=${dateOption}`,
      navigateUrl: `search?q=${query}&published_after=${dateOption}`,
    },
  };
};

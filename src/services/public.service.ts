import { newsApi } from '../api';

/* eslint-disable consistent-return */
export const getNewsByQuery = async <T>(query: string) => {
  try {
    const { data } = await newsApi.get<T>(
      `/all?api_token=${process.env.REACT_APP_API_KEY}&search=${query}`
    );
    console.log('data-response: ', data);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

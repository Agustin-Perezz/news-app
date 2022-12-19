import { newsApi } from '../api';

/* eslint-disable consistent-return */
export const getNewsByQuery = async <T>(query: string) => {
  try {
    const { data } = await newsApi.get<T>(`/everything?q=${query}`, {});
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

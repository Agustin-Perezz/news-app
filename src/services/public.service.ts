import { newsApi } from '../api';
import { loadAbort } from '../utilities';

/* eslint-disable consistent-return */
export const getNewsByQuery = async <T>(query: string) => {
  const controller = loadAbort();
  try {
    return {
      call: newsApi.get<T>(
        `/all?api_token=${process.env.REACT_APP_API_KEY}&search=${query}`,
        { signal: controller.signal }
      ),
      controller,
    };
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

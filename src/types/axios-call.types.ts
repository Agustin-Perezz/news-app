import { AxiosResponse } from 'axios';

export type AxiosCall<T> = {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
};

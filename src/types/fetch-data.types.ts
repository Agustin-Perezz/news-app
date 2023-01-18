import { AxiosInstance } from 'axios';

export type ParametersFetchData = {
  programApi: AxiosInstance;
  endpoint: string;
  urlParameter: string;
};

export type FetchDataProps = {
  fetchData: <T>({ programApi, endpoint, urlParameter }: ParametersFetchData) => Promise<any>;
};

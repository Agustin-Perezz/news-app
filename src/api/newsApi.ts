import axios from 'axios';

export const newsApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

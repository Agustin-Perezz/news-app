import { newsApi } from '../../api';

describe('Test in newsApi', () => {
  it('should contian baseURL', () => {
    expect(newsApi.defaults.baseURL).toBe(process.env.REACT_APP_API_KEY);
  });
});

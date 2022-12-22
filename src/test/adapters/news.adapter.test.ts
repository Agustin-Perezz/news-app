import { createAddaptNew } from '../../adapters';
import { mockResponseArticles } from './mockResponseArticles';

describe('Test in newsAdapter', () => {
  it('should adapt information', () => {
    const results = createAddaptNew(mockResponseArticles);
    expect(results[0].title).toBeDefined();
    expect(results[0].nameSource).toBeDefined();
    expect(results[0].categories).toBeDefined();
    expect(results[0].description).toBeDefined();
    expect(results[0].published_at).toBeDefined();
  });
});

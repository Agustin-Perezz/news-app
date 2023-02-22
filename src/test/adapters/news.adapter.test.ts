import { formatNewsResponse } from '../../adapters';
import { mockResponseArticles } from './mockResponseArticles';

const firstNewsFormatted = {
  categories: [
    {
      color: '#27998D',
      type: 'general',
    },
  ],
  description:
    'En determinadas circunstancias, faltan palabras, especialemente adjetivos, para describir la grandeza de determinadas gestas. Su talente modesto, su llegada des...',
  image_url:
    'https://estaticos-cdn.elperiodico.com/clip/b0783c41-32bf-42d4-b5f1-661d1ff4c8d7_source-aspect-ratio_default_0.jpg',
  nameSource: 'elperiodico.com',
  published_at: '12/20/2022',
  title: 'Messi, Messi, Messi. Da schießt sich wohl jemand für die WM warm! Nachdem Lionel...',
  url: 'https://www.elperiodico.com/es/opinion/20221220/messi-messi-messi-80196169',
  uuid: '0e59db16-31b6-438e-a276-0e815ab989b5',
};

describe('Test in newsAdapter', () => {
  it('should adapt information', () => {
    const results = formatNewsResponse(mockResponseArticles);
    expect(results[0]).toEqual(firstNewsFormatted);
  });
});

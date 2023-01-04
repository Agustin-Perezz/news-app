import { render, screen } from '@testing-library/react';
import { Article } from '../../../../pages/Articles/components';
import { mockArticle } from './mockArticles';

describe('Test in <Article />', () => {
  beforeEach(() => {
    render(<Article dataArticle={mockArticle} />);
  });

  it('shuold match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('shuold render props correctly', () => {
    screen.getByText(mockArticle.nameSource);
    screen.getByText(mockArticle.title);
    screen.getByText(mockArticle.description);
    screen.getByText(mockArticle.categories[0].type);
  });
});

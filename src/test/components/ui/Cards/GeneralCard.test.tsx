import { render, screen } from '@testing-library/react';
import { GeneralCard } from '../../../../components/ui/Cards/GeneralCard';
import { mockArticle } from './mockArticles';

describe('Test in <GeneralCard />', () => {
  beforeEach(() => {
    render(<GeneralCard dataArticle={mockArticle} />);
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

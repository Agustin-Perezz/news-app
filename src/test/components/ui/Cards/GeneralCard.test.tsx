import { render, screen } from '@testing-library/react';
import { GeneralCard } from '../../../../components/ui/Cards/GeneralCard';
import { mockArticle } from './mockArticles';

describe('Test in <GeneralCard />', () => {
  function setup() {
    return render(<GeneralCard dataArticle={mockArticle} />);
  }

  it('should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  it('shuold render props correctly', () => {
    setup();
    screen.getByText(mockArticle.nameSource);
    screen.getByText(mockArticle.title);
    screen.getByText(mockArticle.description);
    screen.getByText(mockArticle.categories[0].type);
  });
});

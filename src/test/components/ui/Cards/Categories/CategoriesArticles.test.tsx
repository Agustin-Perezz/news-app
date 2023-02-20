import { render, screen } from '@testing-library/react';
import { CategoriesArticles } from '../../../../../components/ui/Cards/Categories';
import { listCategories } from './categoriesMock';

describe('Test in <CategoriesArticles/>', () => {
  it('should match snapshot', () => {
    const { container } = render(<CategoriesArticles listCategories={listCategories} />);
    expect(container).toMatchSnapshot();
  });
  it('should show title categories', () => {
    render(<CategoriesArticles listCategories={listCategories} />);
    screen.getByText('science');
    screen.getByText('general');
  });
});

import { render, screen } from '@testing-library/react';
import { CategoriesArticles } from '../../../../components/Articles/Categories';
import { listCategories } from './categoriesMock';

describe('Test in <CategoriesArticles/>', () => {
  it('should match snapshot', () => {
    render(<CategoriesArticles listCategories={listCategories} />);
    expect(screen).toMatchSnapshot();
  });
  it('should show title categories', () => {
    render(<CategoriesArticles listCategories={listCategories} />);
    screen.getByText('science');
    screen.getByText('general');
  });
});

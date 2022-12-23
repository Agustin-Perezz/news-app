import { render, screen } from '@testing-library/react';
import { CategoriesArticles } from '../../../../components/Articles/Categories';
import { listCategories } from './categoriesMock';

describe('Test in <CategoriesArticles/>', () => {
  it('should match snapshot', () => {
    render(<CategoriesArticles listCategories={listCategories} />);
  });
  it('should show title categories', () => {
    render(<CategoriesArticles listCategories={listCategories} />);
    screen.getByText('science');
    screen.getByText('general');
  });
  it('should show correctly styles', () => {
    const { container } = render(
      <CategoriesArticles listCategories={listCategories} />
    );
    const divCategorieGeneral = container.getElementsByClassName(
      'css-l03gat-MuiChip-root'
    );
    expect(divCategorieGeneral[0]).toHaveStyle(
      `border: 1px solid ${listCategories[0].color}`
    );
    const divCategorieScience = container.getElementsByClassName(
      'css-m5sjw8-MuiChip-root'
    );
    expect(divCategorieScience[0]).toHaveStyle(
      `border: 1px solid ${listCategories[1].color}`
    );
  });
});

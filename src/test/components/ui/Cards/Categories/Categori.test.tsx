import { render, screen } from '@testing-library/react';
import { Categori } from '../../../../../components/ui/Cards/Categories';
import { listCategories } from './categoriesMock';

describe('Test in <Categori.test />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Categori categori={listCategories[0]} />);
    expect(container).toMatchSnapshot();
  });
  it('should display correctly information', () => {
    const { container } = render(<Categori categori={listCategories[0]} />);
    expect(screen.getByText('general')).toBeInTheDocument();
    const span = container.getElementsByClassName('css-6od3lo-MuiChip-label');
    expect(span[0]).toHaveStyle(`color: ${listCategories[0]}`);
  });
});

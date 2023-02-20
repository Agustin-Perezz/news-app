import { fireEvent, render, screen } from '@testing-library/react';
import { DrawerCategory } from '../../../../components/NavBar/Drawer';

type Props = { activeCategory: number; idxCategory: number };
describe('Test in <DrawerCategory />', () => {
  const handleSetTab = jest.fn();
  function setup({ activeCategory, idxCategory }: Props) {
    return render(
      <DrawerCategory
        activeCategory={activeCategory}
        icon={<span>TestIcon</span>}
        idxCategory={idxCategory}
        text="General"
        handleSetTab={handleSetTab}
      />
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    const { container } = setup({ activeCategory: 0, idxCategory: 1 });
    expect(container).toMatchSnapshot();
  });
  it('should show correctly props', () => {
    setup({ activeCategory: 0, idxCategory: 1 });
    screen.getByText('General');
    screen.getByText('TestIcon');
  });
  it('should add active class when activeCategory and idxCategory are equal', () => {
    const { container } = setup({ activeCategory: 1, idxCategory: 1 });
    const itemCategory = container.firstChild;
    expect(itemCategory).toHaveClass('Mui-selected');
  });
  it('should call handleSetTab', () => {
    const { container } = setup({ activeCategory: 0, idxCategory: 1 });
    fireEvent.click(container.firstChild!);
    expect(handleSetTab).toHaveBeenCalled();
  });
});

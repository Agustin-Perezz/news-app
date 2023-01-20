import { fireEvent, render, screen } from '@testing-library/react';
import { DrawerCategory } from '../../../../../pages/Header/Components';

type Props = { activeCategory: number; idxCategory: number };
describe('Test in <DrawerCategory />', () => {
  const handleSetTab = jest.fn();

  function setup({ activeCategory, idxCategory }: Props) {
    const { container } = render(
      <DrawerCategory
        activeCategory={activeCategory}
        icon={<span>TestIcon</span>}
        idxCategory={idxCategory}
        text="General"
        handleSetTab={handleSetTab}
      />
    );
    return container;
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    setup({ activeCategory: 0, idxCategory: 1 });
    expect(screen).toMatchSnapshot();
  });
  it('should show correctly props', () => {
    setup({ activeCategory: 0, idxCategory: 1 });
    screen.getByText('General');
    screen.getByText('TestIcon');
  });
  it('should add active class when activeCategory and idxCategory are equal', () => {
    const container = setup({ activeCategory: 1, idxCategory: 1 });
    const itemCategory = container.firstChild;
    expect(itemCategory).toHaveClass('Mui-selected');
  });
  it('should call handleSetTab', () => {
    const container = setup({ activeCategory: 0, idxCategory: 1 });
    fireEvent.click(container.firstChild!);
    const event = {} as React.SyntheticEvent;
    expect(handleSetTab).toHaveBeenCalled();
  });
});

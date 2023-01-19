import { render, screen } from '@testing-library/react';
import { CustomStack } from '../../../../components/ui/CustomStack';

describe('Test in <CustomStack />', () => {
  let globalContainer: HTMLElement;
  beforeEach(() => {
    const { container } = render(
      <CustomStack
        stackProps={{
          alignItems: 'center',
          direction: 'row',
          justifyContent: 'space-around',
        }}
      >
        <h2> Title example </h2>
      </CustomStack>
    );
    globalContainer = container;
  });

  it('should match snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
  it('must contain past props', () => {
    const element = globalContainer.getElementsByClassName('css-1sa62bg-MuiStack-root');
    expect(element[0]).toHaveStyle('justify-content: space-around');
    expect(element[0]).toHaveStyle('align-items: center');
  });
  it('should render a children', () => {
    expect(screen.getByText('Title example')).toBeInTheDocument();
    expect(screen.getByText('Title example')).toContainHTML('h2');
  });
});

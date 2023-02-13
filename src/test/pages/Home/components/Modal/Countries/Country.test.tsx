import { fireEvent, render, screen } from '@testing-library/react';
import { Country } from '../../../../../../pages/Home/components/Modal/Countries/Country';

describe('Test in <Country.test />', () => {
  const handleClickCountry = jest.fn();
  function setup() {
    return render(<Country code="ar" title="Argentina" handleClickCountry={handleClickCountry} />);
  }

  it('should match snapshot', () => {
    setup();
    expect(screen).toMatchSnapshot();
  });
  it('should render props correctly', () => {
    setup();
    const countryElement = screen.getByRole('img');
    expect(countryElement).toBeInTheDocument();
    expect(countryElement).toHaveAttribute('aria-label', 'Argentina');
    expect(countryElement).toHaveAttribute('src', 'https://flagcdn.com/36x27/ar.png');
  });
  it('should call handleClickCountry', () => {
    const { container } = setup();
    const countryBox = container.firstElementChild;
    fireEvent.click(countryBox!);
    expect(handleClickCountry).toHaveBeenCalledWith('ar', 'Argentina');
  });
});

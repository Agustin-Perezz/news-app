import { render, screen } from '@testing-library/react';
import {
  ListCountries,
  dataCountries,
} from '../../../../../../pages/Home/components/Modal/Countries';

describe('Test in <ListCountries />', () => {
  function setup() {
    const handleClickCountry = jest.fn();
    return render(<ListCountries handleClickCountry={handleClickCountry} />);
  }

  it('should match snapshot', () => {
    setup();
    expect(screen).toMatchSnapshot();
  });
  it('should render countries correctly', () => {
    setup();
    const countriesElements = screen.getAllByRole('img');
    countriesElements.forEach((countryElement, idx) => {
      expect(countryElement).toBeInTheDocument();
      expect(countryElement).toHaveAttribute('aria-label', dataCountries[idx].label);
    });
  });
});

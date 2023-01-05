import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../../../components/SearchBar';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Test in <SearchBar />', () => {
  // beforeEach(() => {
  //   render(<SearchBar />);
  // });
  // afterEach(() => {
  //   jest.restoreAllMocks();
  // });
  // it('should match snapshot', () => {
  //   expect(screen).toMatchSnapshot();
  // });
});

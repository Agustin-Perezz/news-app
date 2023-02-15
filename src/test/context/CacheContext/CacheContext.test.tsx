import { fireEvent, render, screen } from '@testing-library/react';
import { CacheProvider } from '../../../context/CacheContext';
import { TestCacheComponent } from './TestCacheComponent';

describe('Test in <CacheContext />', () => {
  function setup() {
    render(
      <CacheProvider>
        <TestCacheComponent />
      </CacheProvider>
    );
  }

  it('cache span not should show nothing', () => {
    setup();
    expect(screen.getByText('empity-cache')).toBeInTheDocument();
  });
  it('should set key and value in context at call function onClick', async () => {
    setup();
    fireEvent.click(screen.getByText('setCache'));
    expect(screen.getByTestId('cache-value').textContent).toBe('test-value');
  });
  it('should clean cache', () => {
    setup();
    fireEvent.click(screen.getByText('removeCache'));
    expect(screen.getByTestId('cache-value').textContent).toBe('empity-cache');
  });
});

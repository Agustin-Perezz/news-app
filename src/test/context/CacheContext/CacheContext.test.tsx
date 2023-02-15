import { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CacheContext, CacheProvider } from '../../../context/CacheContext';

describe('Test in <CacheContext.test />', () => {
  const TestComponent = () => {
    const { setCache, removePropertyCache, cache } = useContext(CacheContext);
    return (
      <div>
        <button type="button" onClick={() => setCache({ key: 'test', value: 'test-value' })}>
          setCache
        </button>
        <button
          type="button"
          onClick={() => {
            removePropertyCache('test');
          }}
        >
          removeCache
        </button>
        <span data-testid="cache-value">
          {cache.test === 'test-value' ? cache.test : 'empity-cache'}
        </span>
      </div>
    );
  };
  function setup() {
    const wrapper = render(
      <CacheProvider>
        <TestComponent />
      </CacheProvider>
    );
    return wrapper;
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

import { useContext } from 'react';
import { CacheContext } from '../../../context/CacheContext';

export const TestCacheComponent = () => {
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

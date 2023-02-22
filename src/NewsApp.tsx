import { AppTheme } from './theme';
import { AppRouter } from './routes';
import { CacheProvider } from './context/CacheContext';
import { NewsProvider } from './context/NewsContext';

export const NewsApp: React.FC = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <AppTheme>
        <CacheProvider>
          <NewsProvider>
            <AppRouter />
          </NewsProvider>
        </CacheProvider>
      </AppTheme>
    </div>
  );
};

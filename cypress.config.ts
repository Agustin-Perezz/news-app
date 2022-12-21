import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/news-app-two/',
    supportFile: 'cypress/support/index.ts',
    viewportHeight: 700,
    viewportWidth: 1180,
  },
});

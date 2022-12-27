/* eslint-disable no-param-reassign */
import { defineConfig } from 'cypress';

import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/news-app-two/',
    supportFile: 'cypress/support/index.ts',
    viewportHeight: 700,
    viewportWidth: 1180,
  },
  env: {
    API_URL: process.env.REACT_APP_API_URL,
    API_KEY: process.env.REACT_APP_API_KEY,
  },
  setupNodeEvents(__, config) {
    config.env = {
      ...process.env,
      ...config.env,
    };
    return config;
  },
});

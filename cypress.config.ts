import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:3333',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: false,
  },
})

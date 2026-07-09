import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  webServer: {
    command: '"C:\\Program Files\\nodejs\\node.exe" ./dist/node-app.js',
    port: 4000,
    reuseExistingServer: true,
    cwd: process.cwd(),
    timeout: 30_000,
    env: {
      PORT: '4000',
    },
  },
  use: {
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
  },
});

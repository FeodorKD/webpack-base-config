import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 10000,
    retries: 0,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        baseURL: 'http://http://localhost:5173/',
    },
});

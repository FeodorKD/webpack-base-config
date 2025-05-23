import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    server: {
    // this ensures that the browser opens upon server start
        open: true,
    },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
});

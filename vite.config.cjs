// import { defineConfig } from 'vite';

// export default defineConfig({
//   build: {
//     outDir: 'dist', // Specify the output directory for the build
//   },
//   root: './', // Specify the root directory of the project
//   publicDir: 'public', // Specify the public directory (if you have one)
//   server: {
//     open: true, // Open the default browser when running the development server
//   },
//   optimizeDeps: {
//     include: ['@tailwindcss/postcss7-compat'],
//   },
// });

const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                pages: resolve(__dirname, 'pages/index.html')
            }
        }
    }
});
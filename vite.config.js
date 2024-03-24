import { defineConfig } from 'vite';

const pages = ['about', 'contact-modal', 'contact', 'publication', 'publications', 'service', 'services', 'team', 'teammate'];

const inputPages = Object.fromEntries(pages.map(page => [page, `./pages/${page}.html`]));

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                components: './components.html',
                ...inputPages,
                mobMenu: './assets/js/mobMenu.js',
                sliderAbout: './assets/js/sliderAbout.js'
            },
            output: {
                chunkFileNames: 'assets/js/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        },
        assetsInclude: ['images/**', 'assets/**'],
    },
});
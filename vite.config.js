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
                mobMenu: './assets/mobMenu.js',
                sliderAbout: './assets/sliderAbout.js'
            },
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        },
        assetsInclude: ['images/**', 'assets/**'],
    },
});
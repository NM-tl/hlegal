import { defineConfig } from 'vite';
import fs from 'fs';

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
                'assets/js/mobMenu': './assets/js/mobMenu.js',
                'assets/js/sliderAbout': './assets/js/sliderAbout.js'
            },
        },
        assetsInclude: ['images/**', 'assets/**'],
    },
});
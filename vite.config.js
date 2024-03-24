import { defineConfig } from 'vite';
import fs from 'fs';

const pages = ['about', 'contact-modal', 'contact', 'publication', 'publications', 'service', 'services', 'team', 'teammate'];

const inputPages = Object.fromEntries(pages.map(page => [page, `./pages/${page}.html`]));
const jsFiles = fs.readdirSync('./assets/js').reduce((acc, file) => {
    if (file.endsWith('.js')) {
        acc[`js/${file.replace('.js', '')}`] = `../assets/js/${file}`;
    }
    return acc;
}, {});

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                components: './components.html',
                ...inputPages,
                ...jsFiles,
            },
        },
        assetsInclude: ['images/**', 'assets/**'],
    },
});
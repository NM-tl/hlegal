import { defineConfig } from 'vite';

const pages = ['about', 'contact', 'publication', 'publications', 'service', 'services', 'team', 'teammate'];

const inputPages = Object.fromEntries(pages.map(page => [page, `./pages/${page}.html`]));

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                components: './components.html',
                ...inputPages,
                'js/mobMenu': './assets/js/mobMenu.js',
                'js/sliderAbout': './assets/js/sliderAbout.js',
                'js/modalCTA': './assets/js/modalCTA.js',
                'js/fbHover': './assets/js/fbHover.js',
                'js/togglePosts': './assets/js/togglePosts.js',
                'js/sliderHome': './assets/js/sliderHome.js',
                'js/tabs': './assets/js/tabs.js',
                'js/smoothScroll': './assets/js/smoothScroll.js'                
            },
            output: {
                assetFileNames: 'assets/[name].[ext]',
                entryFileNames: `assets/[name].js`,
            }
        },
        assetsInclude: ['images/**', 'assets/**'],
    },
});
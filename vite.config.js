import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
    root,
    optimizeDeps: {
        include: ["linked-dep"],
    },

    build: {
        assetsBase: './',
        outDir,
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                slider: resolve(root,"pages", "slider.html"),
                about: resolve(root, "about.html"),
                contactModal: resolve(root,"pages", "contact-modal.html"),
                contact: resolve(root, "contact.html"),
                publication: resolve(root, "pages", "publication.html"),
                publications: resolve(root, "publications.html"),
                service: resolve(root, "pages", "service.html"),
                services: resolve(root, "services.html"),
                team: resolve(root, "team.html"),
                teammate: resolve(root,"pages", "teammate.html"),
                components: resolve(root,"components", "components.html"),
            },
        },
    },
});

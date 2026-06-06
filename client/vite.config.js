import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Fullstack-Gallery-Feedback-App/' : '/',
  define: {
    global: {},
  },
  build: {
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        gallery: '1-gallery.html',
        form: '2-form.html',
      },
    },
  },
}));

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative base path for GitHub Pages deployment
  base: './',
  plugins: [
    react(),
    wasm(),
    topLevelAwait()
  ],
});

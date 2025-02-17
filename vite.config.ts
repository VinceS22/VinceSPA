import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import config from './src/js/config';

export default defineConfig({
  plugins: [react()],
  base: config.repoName,
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});

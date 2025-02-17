import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import config from './src/js/config';

export default defineConfig({
  plugins: [react()],
  base: config.repoName,
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  define: {
    __REPO_NAME__: JSON.stringify(config.repoName)
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-404-template',
      writeBundle() {
        const template404Path = path.resolve(__dirname, 'public/404.html');
        const output404Path = path.resolve(__dirname, 'dist', '404.html');

        let content = fs.readFileSync(template404Path, 'utf-8');
        content = content.replace('%__REPO_NAME__%', '/');

        fs.writeFileSync(output404Path, content);
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  },
  define: {
    __REPO_NAME__: JSON.stringify('/')
  }
});

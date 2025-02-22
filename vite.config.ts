import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const repoName = process.env.NODE_ENV === 'development' ? '/' : 'https://vinces22.github.io';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-404-template',
      writeBundle() {
        const template404Path = path.resolve(__dirname, 'public/404.html');
        const output404Path = path.resolve(__dirname, './', '404.html');

        let content = fs.readFileSync(template404Path, 'utf-8');
        content = content.replace('%__REPO_NAME__%', `/${repoName}`);

        fs.writeFileSync(output404Path, content);
      }
    }
  ],
  base: `${repoName}`,
  build: {
    outDir: './', // Changed from 'dist' to './'
    sourcemap: true,
    emptyOutDir: false // This prevents deleting .git directory
  },
  define: {
    __REPO_NAME__: JSON.stringify(repoName)
  }
});

import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

function pwaPrecacheManifestPlugin(): Plugin {
  return {
    name: 'pwa-precache-manifest',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const swPath = path.join(distDir, 'sw.js');
      if (!fs.existsSync(swPath)) return;

      const urls: string[] = ['/'];
      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
          } else {
            const rel = '/' + path.relative(distDir, full).replace(/\\/g, '/');
            if (rel !== '/sw.js') {
              urls.push(rel);
            }
          }
        }
      };
      walk(distDir);

      const content = fs.readFileSync(swPath, 'utf-8');
      const updated = content.replace(
        /\/\* __PRECACHE_URLS__ \*\/ \[[^\]]*\]/,
        JSON.stringify(urls)
      );
      fs.writeFileSync(swPath, updated, 'utf-8');
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), pwaPrecacheManifestPlugin()],
  server: {
    host: true,
    allowedHosts: true, // Permite qualquer host do túnel Cloudflare sem erro 403
  },
});

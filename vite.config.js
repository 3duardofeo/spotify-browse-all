import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync(
          join(__dirname, 'public/404.html'),
          join(__dirname, 'dist/404.html')
        )
      }
    }
  ],
  // Use base path for production builds (GitHub Pages), root for dev
  base: process.env.NODE_ENV === 'production' ? '/spotify-browse-all/' : '/',
  preview: {
    port: 4173,
    strictPort: false,
    // Preview should match production build
  },
  server: {
    port: 5173,
    strictPort: false,
    open: true, // Automatically open browser
  },
})

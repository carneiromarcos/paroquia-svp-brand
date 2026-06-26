import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// base é paramétrico para suportar dois hosts durante a migração (zero downtime):
//   - Cloudflare Pages (domínio próprio na raiz) → VITE_BASE ausente → '/'
//   - GitHub Pages (subpath legado, a desligar)  → VITE_BASE=/paroquia-svp-brand/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@content': path.resolve(__dirname, './content'),
    },
  },
})

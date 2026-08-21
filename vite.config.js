import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Uses '/' for Vercel deployment, '/fr-ley-portfolio/' for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/fr-ley-portfolio/',
})

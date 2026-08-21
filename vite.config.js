import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'fr-ley-portfolio' to your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/fr-ley-portfolio/',
})

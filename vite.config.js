import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // for handling SPA routing
  },
  preview: {
    allowedHosts: ['divinemyst.onrender.com'], // Add your Render host here
  },
})

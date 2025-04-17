import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for production deployment
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
  }
})

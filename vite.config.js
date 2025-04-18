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
    host: '0.0.0.0',          // Bind to all network interfaces
    port: 10000,              // Ensure the port is set to 10000
  },
  preview: {
    allowedHosts: ['divinemyst.life'], // Add your Render host here
  }
})

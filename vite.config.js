import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ensure your app is publicly accessible
    port: process.env.PORT || 4173,  // Use Render's port or fallback to 4173
    historyApiFallback: true,  // for handling SPA routing
  }
})

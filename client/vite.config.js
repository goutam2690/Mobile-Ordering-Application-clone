import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    assetsDir: 'assets', // Specify the assets directory for the production build
    sourcemap: true, // Enable source maps for production build
  },
  server: {
    port: 3000, // Specify the port for the development server
    proxy: {
      '/api': 'http://localhost:5045', // Example: Proxy API requests to a local server
    },
  },
})


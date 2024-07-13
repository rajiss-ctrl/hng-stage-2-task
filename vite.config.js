import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Import the appropriate config based on the environment
const env = process.env.NODE_ENV;
const config = env === 'production'
  ? require('./config.production.js').config
  : require('./config.development.js').config;

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      API_KEY: JSON.stringify(config.API_KEY),
      APP_ID: JSON.stringify(config.APP_ID),
      ORGANIZATION_ID: JSON.stringify(config.ORGANIZATION_ID)
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.timbu.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Include .jsx files
      include: "**/*.{jsx,tsx}",
    }),
    tailwindcss()
  ],
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons/fa']
        }
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify CSS and JS
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimize dev server for hot reload
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: true,
      clientPort: 5173
    },
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  // Optimize dependencies for faster hot reload
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/fa']
  }
})
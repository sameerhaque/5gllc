import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 5000,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          cesium: ['cesium'],
          react: ['react', 'react-dom', 'react-helmet', 'react-icons', 'react-router-dom'],
          ui: [
            '@chakra-ui/icons',
            '@chakra-ui/react',
            '@emotion/react',
            '@emotion/styled',
            '@fontsource/inter',
            '@fontsource/raleway',
            'framer-motion'
          ]
        }
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      lib: resolve(__dirname, 'src/lib'),
      routes: resolve(__dirname, 'src/routes')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/lib/**/index.test.ts'],
    outputFile: 'src/lib/test/output.json',
    reporters: 'json',
    // reporters: 'verbose',
    setupFiles: 'src/lib/test/setup.ts',
    transformMode: {
      web: [/\.tsx$/]
    }
  }
})

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  // Build configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/css/i.test(ext)) {
            return 'styles.[ext]'
          }
          return '[name].[ext]'
        }
      }
    }
  },

  // CSS configuration
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS files will be imported through main.js instead
      }
    }
  },

  // Server configuration
  server: {
    port: 8080,
    open: true,
    host: true
  },

  // Preview configuration (for build testing)
  preview: {
    port: 8080,
    open: true
  },

  // Plugins
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
}) 
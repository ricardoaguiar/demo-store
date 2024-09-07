import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/mixins.scss";`,
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
  base: '/', // Ensure this matches your BASE_URL

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@types': fileURLToPath(new URL('./types', import.meta.url)),
      '@data': fileURLToPath(new URL('./data', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
  },
})

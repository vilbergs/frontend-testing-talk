import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: ['test/unit/setup.ts'],
    include: ['test/unit/**/*.test.ts'],
  },
})

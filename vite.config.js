import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// Plugin to copy index.html to 404.html for SPA routing on GitHub Pages
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const indexPath = resolve(__dirname, 'docs/index.html')
      const notFoundPath = resolve(__dirname, 'docs/404.html')
      try {
        const indexContent = readFileSync(indexPath, 'utf-8')
        writeFileSync(notFoundPath, indexContent)
        console.log('✓ Created 404.html from index.html')
      } catch (err) {
        console.error('Failed to create 404.html:', err)
      }
    }
  }
}

export default defineConfig({
  plugins: [vue(), copy404Plugin()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  base: './'
})

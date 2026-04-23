import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/la-nina-en-la-tecnologia/',
  plugins: [react(), tailwindcss()],
})
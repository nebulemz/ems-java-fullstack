import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port:3000 //This is manually set-up in typing npm run dev -- --port 3000
  }
})

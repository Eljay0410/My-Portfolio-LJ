import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'
import tailwindcss from '@tailwindcss/vite' // Iwanan mo itong import na ito sa itaas

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // Ibalik mo ito para hindi mag-error ang build mo!
  ],
  base: '/My-Portfolio-LJ/', 
})
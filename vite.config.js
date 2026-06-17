import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio-LJ/', // DAPAT GANITO: may slash sa simula at dulo, case-sensitive!
})
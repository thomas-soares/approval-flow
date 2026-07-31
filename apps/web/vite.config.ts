import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { aliases } from '../../configs/aliases.js';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: aliases
  }
});
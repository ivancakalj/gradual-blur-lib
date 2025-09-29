import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 build: {
  lib: {
    entry: 'src/index.jsx', // ovdje novi fajl
    name: 'GradualBlur',
    fileName: 'index',
    formats: ['iife']
  }
}

});

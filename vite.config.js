import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base so the built dist/ folder also works from any sub-path
  base: './',
  server: {
    port: 5173,
    open: true,
  },
});

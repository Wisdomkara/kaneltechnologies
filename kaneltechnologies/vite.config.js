import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kaneltechnologies/', // ✅ no angle brackets
  plugins: [react()],
});

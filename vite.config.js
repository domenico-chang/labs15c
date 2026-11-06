import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  process.env.VITE_DEPLOYMENT_SHA = env.VITE_DEPLOYMENT_SHA || 'local';

  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.js']
    }
  };
});

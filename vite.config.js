import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const isProduction = mode === 'production' || command === 'build'
  const base = isProduction ? process.env.VITE_BASE_URL : '/'


  return {
    plugins: [
      vue(),
      vuetify(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    base,
  };
});

import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      // VitePWA({
      //   registerType: 'autoUpdate',
      //   workbox: {
      //     globPatterns: ['**/*.{js,css,html,jpg,png,svg}'],
      //     maximumFileSizeToCacheInBytes: 4000000,
      //   },
      //   devOptions: {
      //     enabled: true,
      //   },
      //   manifest: {
      //     name: '',
      //     short_name: '',
      //     description: '',
      //     theme_color: '#001E02',
      //     background_color: '#ffffff',
      //     display: 'standalone',
      //   },
      // }),
    ],
  };
});

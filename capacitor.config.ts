import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.porridge.app',
  appName: 'Porridge',
  webDir: 'dist/apps/porridge/browser',
  plugins: {
    EdgeToEdge: {
      backgroundColor: '#ffffff',
    },
  },
};

export default config;

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.porridge.app',
  appName: 'porridge',
  webDir: 'www',
  plugins: {
    EdgeToEdge: {
      backgroundColor: '#ffffff',
    },
  },
};

export default config;

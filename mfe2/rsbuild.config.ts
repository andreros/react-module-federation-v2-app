import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe2',
      exposes: {
        './mfeApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  html: {
    title: 'Micro Frontend 2 Application'
  },
  server: {
    port: 4002,
  },
});

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe1',
      exposes: {
        './mfeApp': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  html: {
    title: 'Micro Frontend 1 Application'
  },
  server: {
    port: 4001,
  },
});

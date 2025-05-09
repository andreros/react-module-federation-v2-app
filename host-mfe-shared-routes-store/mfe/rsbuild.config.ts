import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './mfeApp': './src/App.tsx',
      },
      remotes: {
        host: 'host@http://localhost:4000/remoteEntry.js'
      },
      shared: ['immer', 'react', 'react-dom', 'react-router-dom', 'zustand'],
    }),
  ],
  html: {
    title: 'Micro Frontend Application'
  },
  server: {
    port: 4001,
  },
});

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      filename: 'remoteEntry.js',
      exposes: {
        './stores': './src/stores/global.ts'
      },
      remotes: {
        mfe: 'mfe@http://localhost:4001/remoteEntry.js'
      },
      shared: ['immer', 'react', 'react-dom', 'react-router-dom', 'zustand'],
    }),
  ],
  html: {
    title: 'Module Federation Host Application'
  },
  server: {
    port: 4000
  },
});

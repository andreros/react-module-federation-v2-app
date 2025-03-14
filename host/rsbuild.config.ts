import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        mfe1: 'mfe1@http://localhost:4001/mf-manifest.json',
        mfe2: 'mfe2@http://localhost:4002/mf-manifest.json',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  html: {
    title: 'Module Federation Application'
  },
  server: {
    port: 4000,
  },
});

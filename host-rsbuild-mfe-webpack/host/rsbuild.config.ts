import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        mfe: 'mfe@http://localhost:4001/remoteEntry.js',
      },
      shared: {
        react: { singleton: false, eager: true, requiredVersion: "19.x" },
        "react-dom": { singleton: false, eager: true, requiredVersion: "19.x" },
      },
    }),
  ],
  html: {
    title: 'React 19 Host Application'
  },
  server: {
    port: 4001
  },
});

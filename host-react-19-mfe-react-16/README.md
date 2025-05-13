# Host application with React 19 + microfrontend with React 16 example

- host: http://localhost:4000/
- mfe: http://localhost:4001/

The module federation configuration in this project is based in the `filename: 'remoteEntry.js'` definition. This is useful if you want to integrate other 
microfrontends built with Webpack 5.

Host application is implemented with the following tech stack:

- React 19
- TypeScript
- Module Federation Plugin v2.0
- Biome
- Rsbuild

Microfrontend application is implemented with the following tech stack:

- React 16
- TypeScript
- Module Federation Plugin v2.0
- Biome
- Webpack 5

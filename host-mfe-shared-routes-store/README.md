# Host application with microfrontend sharing routes and global store example

- host: http://localhost:4000/
- mfe: http://localhost:4001/

The module federation configuration in this project is based in the `filename: 'remoteEntry.js'` definition. This is useful if you want to integrate other 
microfrontends built with Webpack 5, if needed.

All apps are implemented with the following tech stack:

- React 19
- TypeScript
- Module Federation Plugin v2.0
- React Router 6
- Immer
- Zustand
- Biome
- Rsbuild

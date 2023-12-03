/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import * as tsPaths from './tsconfig.paths.json';

// Get the path aliases from the typescript config
const paths = tsPaths.compilerOptions.paths;
const mappedPaths = {};

// Loop over the aliases and map them to a format that can be used by vite
for (let key of Object.keys(paths)) {
  const pathKey = key.split('/*')[0];
  const pathValue = paths[key][0].split('/*')[0];

  mappedPaths[pathKey] = path.resolve(__dirname, `./${pathValue}`);
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: mappedPaths,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts'
  }
});
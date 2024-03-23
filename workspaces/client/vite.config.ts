// import fs from 'node:fs';
import path from 'node:path';

import {NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill'
import {NodeModulesPolyfillPlugin} from '@esbuild-plugins/node-modules-polyfill'
import react from '@vitejs/plugin-react';
import {polyfillNode} from "esbuild-plugin-polyfill-node";
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import {defineConfig} from 'vite';

// Assuming findWorkspaceDir and findPackageDir work similarly in a Vite environment or you have equivalent implementations
const PACKAGE_DIR = path.resolve(__dirname); // Assuming this file is at the project root, adjust as necessary
// const WORKSPACE_DIR = path.resolve(__dirname, '../..'); // Adjust according to your actual workspace structure

const OUTPUT_DIR = path.resolve(PACKAGE_DIR, './dist');
// const SEED_IMAGE_DIR = path.resolve(WORKSPACE_DIR, './workspaces/server/seeds/images');
// const IMAGE_PATH_LIST = fs.readdirSync(SEED_IMAGE_DIR).map((file) => `/images/${file}`);

export default defineConfig({
  build: {
    // Adjust according to your needs, considering the browsers you want to support
    assetsDir: './',
    // Inline sourcemaps; adjust as needed
    minify: 'esbuild',
    outDir: OUTPUT_DIR,
    rollupOptions: {
      // Rollup specific configurations
      // input: {
      //   // client: path.resolve(PACKAGE_DIR, './src/index.tsx'),
      //   // serviceworker: path.resolve(PACKAGE_DIR, './src/serviceworker/index.ts'),
      // },
      plugins: [
        // @ts-ignore
        rollupNodePolyFill(),
      ]
    },
    sourcemap: true,
    target: 'esnext',
    // Other options as per your requirement
  },
  define: {
    global: 'globalThis',
    // 'process.env.API_URL': '',
    // 'process.env.PATH_LIST': IMAGE_PATH_LIST.join(',') || '', // Define global variables if needed
  },
  // Additional Vite configuration options as needed
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true
        }),
        NodeModulesPolyfillPlugin(),
        polyfillNode({
          globals: {
            process: false,
          },
          polyfills: {
            events: true,
            fs: true,
            path: true,
          },
        }),
      ],
    }
  },
  plugins: [
    react(), // Enables React fast refresh and other features
  ],
  resolve: {
    alias: {
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      'node:buffer': 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
    },
  },
});

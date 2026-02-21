import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'CyberpunkBridge',
      fileName: 'module',
      formats: ['es'] // ES Module format for Foundry
    },
    rollupOptions: {
      output: {
        assetFileNames: "module.[ext]",
        banner: `/** Hot Reload Support **/
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log("Hot reloading module...");
  });
}`
      }
    }
  }
});
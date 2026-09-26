import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

// Deploy the built module into a local Foundry data folder after every build.
//
// Set the target by creating foundryconfig.json (gitignored) at the repo root:
//   { "dataPath": "/home/you/foundrydata" }
//
// On each build the runtime files (module.json, dist, templates, lang) are
// copied into <dataPath>/Data/modules/<module id>. Because this runs on every
// build it also fires under `vite build --watch` (npm run dev), so saving a
// source file redeploys automatically.
//
// Foundry hot-reloads templates (.hbs) and lang (.json) live once they land in
// the module folder. The compiled JS (dist/module.mjs) is NOT hot-reloadable by
// Foundry, so a JS change still needs a client reload (F5) to take effect.
//
// If foundryconfig.json is absent (e.g. CI) the deploy is skipped silently.
function foundryDeploy() {
  const ASSETS = ['module.json', 'dist', 'templates', 'lang'];
  return {
    name: 'foundry-deploy',
    closeBundle() {
      const cfgPath = path.resolve(__dirname, 'foundryconfig.json');
      if (!fs.existsSync(cfgPath)) return;

      let dataPath;
      try {
        dataPath = JSON.parse(fs.readFileSync(cfgPath, 'utf8')).dataPath;
      } catch (e) {
        this.warn(`foundryconfig.json is unreadable: ${e.message}`);
        return;
      }
      if (!dataPath) return;

      const moduleId = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'module.json'), 'utf8')).id;
      const dest = path.join(dataPath, 'Data', 'modules', moduleId);
      fs.mkdirSync(dest, { recursive: true });

      for (const asset of ASSETS) {
        const src = path.resolve(__dirname, asset);
        if (!fs.existsSync(src)) continue;
        const target = path.join(dest, asset);
        fs.rmSync(target, { recursive: true, force: true });
        fs.cpSync(src, target, { recursive: true });
      }
      console.log(`\n[foundry-deploy] ${moduleId} -> ${dest}`);
    }
  };
}

export default defineConfig({
  plugins: [foundryDeploy()],
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

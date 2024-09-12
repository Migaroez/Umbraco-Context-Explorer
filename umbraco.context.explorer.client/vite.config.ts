import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Entrypoint file (registers other manifests)
      formats: ["es"],
      fileName: 'umbraco.context.explorer',
    },
    outDir: '../Umbraco.Context.Explorer/wwwroot', // your web component will be saved to the RCL project location and the RCL sets the path as App_Plugins/Umbraco.Context.Explorer
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});

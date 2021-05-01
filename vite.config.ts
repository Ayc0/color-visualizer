import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: { "lch-vendors": ["d3-color"] },
      },
    },
  },
});

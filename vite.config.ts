import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/color-visualizer/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: { "lch-vendors": ["d3-color"] },
      },
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  server: {
    port: 4040,
  },
});

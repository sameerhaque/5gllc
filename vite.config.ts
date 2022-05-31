import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
});

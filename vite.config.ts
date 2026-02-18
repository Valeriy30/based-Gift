import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client", // исходники фронта
  base: "./",     // КРИТИЧНО: делает пути относительными (./assets/...)
  build: {
    outDir: "../dist", // собираем в корень проекта
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
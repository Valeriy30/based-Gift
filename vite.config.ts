import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  base: "/", // Это критично для корректных путей на Vercel
  build: {
    outDir: "../dist", // Собираем в корневую папку dist
    emptyOutDir: true,
    rollupOptions: {
      // Указываем правильный путь к index.html от корня проекта
      input: path.resolve(__dirname, "client/index.html"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
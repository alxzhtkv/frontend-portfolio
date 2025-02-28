import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

const resolvePath = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@shared": resolvePath("./src/shared"),
      "@app": resolvePath("./src/app"),
      "@widgets": resolvePath("./src/widgets"),
      "@pages": resolvePath("./src/pages"),
      "@features": resolvePath("./src/features"),
      "@hooks": resolvePath("./src/hooks"),
      "@assets": resolvePath("./src/assets")
    }
  },
  preview: {
    host: true,
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@use "@assets/styles/globals.scss" as *;`
      }
    }
  }
});

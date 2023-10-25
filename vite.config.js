import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: [
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./__tests__/**/*.js",
        "./__tests__/**/*.jsx",
      ],
      exclude: [],
    }),
  ],
});

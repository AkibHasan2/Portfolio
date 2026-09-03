import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://AkibHasan2.github.io/Portfolio/
const isGhPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? "/Portfolio/" : "/",
  server: {
    port: 5173,
  },
});

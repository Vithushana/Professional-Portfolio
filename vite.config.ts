import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // When deploying to GitHub Pages at
  // https://<username>.github.io/Professional-Portfolio/
  // set the base to the repository name so asset paths are correct.
  base: "/Professional-Portfolio/",
  plugins: [react(), tailwindcss()],
});
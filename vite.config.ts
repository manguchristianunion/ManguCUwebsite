import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],

  // When deployed to GitHub Pages the site lives at /repo-name/, not /.
  // The workflow sets BASE_PATH=repo-name; locally it's undefined so we fall back to '/'.
  base: "/ManguCUwebsite/",
});

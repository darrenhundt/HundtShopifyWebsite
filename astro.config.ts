import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://darrenhundt.dev",
  output: "static",
  trailingSlash: "never",
  integrations: [sitemap()],
});

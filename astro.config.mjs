import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://avarastudio.be",

  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://avarastudio.be/merci/" &&
        page !== "https://avarastudio.be/en/thank-you/",
    }),
  ],
});

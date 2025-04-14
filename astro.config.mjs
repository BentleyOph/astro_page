// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site:"https://cheerful-unicorn-18af82.netlify.app/blog/",
  integrations: [preact()]
});
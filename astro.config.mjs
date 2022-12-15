// https://astro.build/config

import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

export default defineConfig({
  integrations: [svelte()]
});
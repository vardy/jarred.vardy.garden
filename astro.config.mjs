// https://astro.build/config

import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

export default defineConfig({
    site: 'https://jarred.vardy.garden',
    integrations: [svelte()],
    markdown: {
        shikiConfig: {
            // Ref: https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: 'github-light'
        }
    }
});

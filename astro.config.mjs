// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte({ extensions: ['.svelte'] }), mdx()],
  site: 'https://ducklyst.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
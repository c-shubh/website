// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://cshubh.com',
	integrations: [mdx(), react(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		'/github': 'https://github.com/c-shubh/',
		'/linkedin': 'https://www.linkedin.com/in/c-shubh/',
		'/leetcode': 'https://leetcode.com/u/c-shubh/',
		// This website used to have a /links page with list of links to interesting stuff.
		// Now it's merged into /library.
		'/links': '/library',
	},
});

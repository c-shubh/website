// @ts-check

import { SITE } from './src/consts';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: SITE,
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
		// /gram used to have a three column masonry layout of the same photos as
		// Instagram. This was intended to be an alternative way to view the photos
		// for those not on Instagram or who didn't want to use Instagram.
		// This page was archived and now removed since converted HEIC photos were
		// too large to load, and figuring out an optimal way is not a priority
		// right now. I'll revisit this sometime in the future.
		'/gram': 'https://www.instagram.com/c_shubh_/',
	},
});

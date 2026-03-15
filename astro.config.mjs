// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { copyFile } from 'node:fs/promises';
import { SITE } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [
		mdx(),
		react(),
		sitemap({
			filter: (page) => page !== `${SITE}/library`,
		}),
		{
			// Docusaurus generated sitemap at /sitemap.xml, but Astro generates it at
			// /sitemap-index.xml. So copy it over after build to not break existing
			// sitemap link.
			name: 'my-copy-sitemap',
			hooks: {
				'astro:build:done': async ({ dir, logger }) => {
					const inFile = new URL('sitemap-index.xml', dir);
					const outFile = new URL('sitemap.xml', dir);
					await copyFile(inFile, outFile);
					logger.info('Copied `dist/sitemap-index.xml` to `dist/sitemap.xml`');
				},
			},
		},
		,
	],
	trailingSlash: 'always',
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		'/github/': 'https://github.com/c-shubh/',
		'/linkedin/': 'https://www.linkedin.com/in/c-shubh/',
		'/leetcode/': 'https://leetcode.com/u/c-shubh/',
		'/signal/': 'https://signal.me/#eu/KhV7h5bCIHVJCqd-yw03iAagx8l3XZCYqcKEEWMu5SAwZifVvuVFEKKhky6e5Rcp',
		'/instagram/': 'https://www.instagram.com/c_shubh_/',
		// This website used to have a /links page with list of links to interesting stuff.
		// Now it's merged into /library.
		'/links/': '/library/',
		// /gram used to have a three column masonry layout of the same photos as
		// Instagram. This was intended to be an alternative way to view the photos
		// for those not on Instagram or who didn't want to use Instagram.
		// This page was archived and now removed since converted HEIC photos were
		// too large to load, and figuring out an optimal way is not a priority
		// right now. I'll revisit this sometime in the future.
		'/gram/': 'https://www.instagram.com/c_shubh_/',
		// authors, archive and tags pages are yet to be implemented
		'/blog/authors/': '/blog/',
		'/blog/archive/': '/blog/',
		'/blog/tags/': '/blog/',
		'/blog/tags/til/': '/blog/',
	},
});

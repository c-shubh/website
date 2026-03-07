import { BLOG_ATOM_FEED, COPYRIGHT, FULL_NAME, LANGUAGE, SITE, SITE_DESCRIPTION } from '@/consts';
import type { CollectionEntry } from 'astro:content';
import { Feed, type FeedOptions, type Item } from 'feed';
import { SITE_TITLE } from './consts';

export function clsx(...args: unknown[]): string {
	return args.reduce<string>((result: string, arg) => {
		if (typeof arg === 'string') {
			result += ' ' + arg;
		}
		return result;
	}, '');
}

export function pageTitle(name: string): string {
	return `${name} | ${SITE_TITLE}`;
}

export async function generateFeed(type: 'rss' | 'atom', posts: CollectionEntry<'blog'>[]) {
	// Use trailing slash for blog list page
	const blogBaseUrl = `${SITE}/blog/`;
	const copyrightLine = `${COPYRIGHT.symbol} ${COPYRIGHT.year} ${COPYRIGHT.holder}. ${COPYRIGHT.string}`;

	const feedOptions: FeedOptions = {
		title: `${FULL_NAME}'s Blog`,
		// Atom feed ID is not supposed to be changed, hence retain its old value.
		id: blogBaseUrl.substring(0, blogBaseUrl.length - 1),
		link: blogBaseUrl,
		description: SITE_DESCRIPTION,
		copyright: copyrightLine,
		language: LANGUAGE,
		favicon: `${SITE}/favicon.ico`,
	};

	if (type === 'atom') {
		feedOptions.feedLinks = {
			atom: `${SITE}${BLOG_ATOM_FEED}`,
		};
	}

	const feed = new Feed(feedOptions);

	posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

	for (const post of posts) {
		const itemOptions: Item = {
			title: post.data.title,
			// Add trailing slash for all post links
			link: `${blogBaseUrl}${post.id}/`,
			id:
				post.data.date <= new Date('2026-03-02')
					? `${blogBaseUrl}${post.id}` // Old posts keep the old ID
					: `${blogBaseUrl}${post.id}/`, // New posts get the new ID
			date: post.data.date,
			author: [
				{
					name: FULL_NAME,
					link: '/',
				},
			],
			copyright: copyrightLine,
		};
		feed.addItem(itemOptions);
	}

	if (type === 'atom') {
		return feed.atom1();
	} else if (type === 'rss') {
		return feed.rss2();
	}
}

/**
 * Ensures that internal links always have a trailing slash.
 * Preserves query strings and hash fragments in the correct order.
 * Correctly handles hash-based routes where ? appears within the fragment.
 *
 * @param href - The URL to normalize
 * @returns The URL with a trailing slash (if internal and appropriate)
 *
 * @example
 * ensureTrailingSlash('/posts') // => '/posts/'
 * ensureTrailingSlash('/posts/my-post') // => '/posts/my-post/'
 * ensureTrailingSlash('/posts#top') // => '/posts/#top'
 * ensureTrailingSlash('/search?q=test') // => '/search/?q=test'
 * ensureTrailingSlash('/search?q=test#results') // => '/search/?q=test#results'
 * ensureTrailingSlash('/#settings?tab=2') // => '/#settings?tab=2' (hash-based route)
 * ensureTrailingSlash('/posts/') // => '/posts/'
 * ensureTrailingSlash('/rss.xml') // => '/rss.xml' (keeps file extensions as is)
 *
 * MIT License: https://github.com/cduruk/offbyone/blob/09df1f3e4a0825b925ac88061cef623d0aee8301/LICENSE
 * https://github.com/cduruk/offbyone/blob/09df1f3e4a0825b925ac88061cef623d0aee8301/src/lib/utils.ts#L39
 *
 */
export function ensureTrailingSlash(href: string): string {
	// Don't modify empty strings, external URLs, or anchor-only links
	if (!href || href.startsWith('http') || href.startsWith('#')) {
		return href;
	}

	// Find positions of query and hash
	const queryIndex = href.indexOf('?');
	const hashIndex = href.indexOf('#');

	// Determine if we have a real query string (? must come before #, if # exists)
	const hasQuery = queryIndex !== -1 && (hashIndex === -1 || queryIndex < hashIndex);
	const hasHash = hashIndex !== -1 && !hasQuery; // Only treat # as delimiter if no query before it

	let pathPart: string;
	let queryAndHashPart: string | undefined;

	if (hasQuery) {
		// Real query string: split at ?
		pathPart = href.substring(0, queryIndex);
		queryAndHashPart = href.substring(queryIndex + 1);
	} else if (hasHash) {
		// Hash fragment (may contain ? inside it): split at #
		pathPart = href.substring(0, hashIndex);
		queryAndHashPart = href.substring(hashIndex + 1);
	} else {
		// No query or hash
		pathPart = href;
		queryAndHashPart = undefined;
	}

	// Don't add trailing slash to files with extensions (like .xml, .pdf, etc.)
	// or if the path already has a trailing slash
	if (pathPart.endsWith('/') || /\.[a-z]+$/i.test(pathPart)) {
		return href;
	}

	// Add trailing slash to the path
	const normalizedPath = `${pathPart}/`;

	// Reattach query/hash with appropriate separator (skip if empty)
	if (!queryAndHashPart || queryAndHashPart === '') {
		return normalizedPath;
	}

	// If we had a query string, reattach with ?
	if (hasQuery) {
		return `${normalizedPath}?${queryAndHashPart}`;
	}

	// Otherwise, it was a hash, reattach with #
	return `${normalizedPath}#${queryAndHashPart}`;
}

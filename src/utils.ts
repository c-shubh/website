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

export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}

export function pageTitle(name: string): string {
	return `${name} | ${SITE_TITLE}`;
}

export async function generateFeed(type: 'rss' | 'atom', posts: CollectionEntry<'blog'>[]) {
	const blogBaseUrl = `${SITE}/blog`;
	const copyrightLine = `${COPYRIGHT.symbol} ${COPYRIGHT.year} ${COPYRIGHT.holder}. ${COPYRIGHT.string}`;

	const feedOptions: FeedOptions = {
		title: pageTitle('Blog'),
		id: blogBaseUrl,
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
		const blogPostUrl = `${blogBaseUrl}/${post.id}`;
		const itemOptions: Item = {
			title: post.data.title,
			link: blogPostUrl,
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

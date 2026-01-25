import { getCollection } from 'astro:content';
import { generateFeed } from '../../utils';

export async function GET() {
	const posts = await getCollection('blog');
	const feed = await generateFeed('rss', posts);
	return new Response(feed, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	});
}

import { getCollection } from 'astro:content';

export async function getBlogPosts() {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf()
	);
	return posts;
}

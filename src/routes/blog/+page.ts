import { getAllPostsMetadata } from '$lib/utils';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const posts = getAllPostsMetadata();
	return { posts };
};

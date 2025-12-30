import type { Component, Snippet } from 'svelte';

export type PropsWithChildren<P, Mode extends 'required' | 'optional' = 'optional'> = P &
	(Mode extends 'required' ? { children: Snippet } : { children?: Snippet });

export interface PostMetadata {
	date: string;
	draft: boolean;
	tags?: string[];
	title: string;
}

export interface PostMdsvexModule {
	default: Component;
	metadata: PostMetadata;
}

export function getAllPostsMetadata() {
	const modules = import.meta.glob('/blog/**/*.{md,mdx}', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, module]) => ({
			slug: path.split('/')[2],
			metadata: (module as PostMdsvexModule).metadata as PostMetadata
		}))
		.sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1));
	return posts;
}

export async function getPostBySlug(slug: string) {
	const modules = import.meta.glob('/blog/**/*.{md,mdx}');
	const matchPath = `/blog/${slug}/index.md`;
	const match = modules[matchPath] || modules[matchPath + 'x'];

	if (!match) {
		return null;
	}

	const post = (await match()) as PostMdsvexModule;

	return {
		component: post.default,
		metadata: post.metadata
	};
}

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './blog', pattern: './**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			tags: z.array(z.string()).optional(),
			// Transform string to Date object
			date: z.coerce.date(),
		}),
});

export const collections = { blog };

export const tools = [
	{
		name: 'Bulk URL Opener',
		slug: 'bulk-url-opener',
		description: 'Paste a list of URLs to open them all in new tabs.',
	},
	{
		name: 'QR Code Generator',
		slug: 'qr-code-generator',
		description: 'Generate one or more QR codes.',
	},
	{
		name: 'Slugify',
		slug: 'slugify',
		description: 'Create slug from text.',
	},
	{
		name: 'Word Count',
		slug: 'word-count',
		description: 'Count characters, words, and lines in text.',
	},
	{
		name: 'Section Comment Generator',
		slug: 'section-comment-generator',
		description: 'Generate code comment to be used to mark sections in code.',
	},
	{
		name: 'Camera & Mic Test',
		slug: 'webcam-mic-test',
		description: 'Test your camera and microphone, take pictures, or record audio.',
	},
] as const;

export type ToolSlug = (typeof tools)[number]['slug'];

export interface Tool {
	name: string;
	slug: ToolSlug;
	description: string;
}

export const toolsMap: Record<ToolSlug, Tool> = Object.fromEntries(
	tools.map((tool) => [tool.slug, tool])
) as Record<ToolSlug, Tool>;

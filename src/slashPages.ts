export const slashPages = [
	{ href: '/blog/', name: 'Blog', showInHeader: true },
	{ href: '/tools/', name: 'Tools', showInHeader: true },
	{ href: '/quotes/', name: 'Quotes', showInHeader: true },
	{ href: '/contact/', name: 'Contact', showInHeader: true },
] as const;

type Href = (typeof slashPages)[number]['href'];

export interface SlashPage {
	name: string;
	href: Href;
	showInHeader?: boolean;
}

export const slashPagesMap: Record<Href, SlashPage> = Object.fromEntries(
	slashPages.map((page) => [page.href, page])
) as Record<Href, SlashPage>;

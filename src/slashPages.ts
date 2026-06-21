export const slashPages = [
	{ href: '/blog/', name: 'Blog', showInHeader: true },
	{ href: '/tools/', name: 'Tools', showInHeader: true },
	{ href: '/quotes/', name: 'Quotes', showInHeader: true },
	{ href: '/listens/', name: 'Listens' },
	{ href: '/bookshelf/', name: 'Bookshelf' },
	{ href: '/contact/', name: 'Contact', showInHeader: true },
] as const;

type Name = (typeof slashPages)[number]['name'];

export interface SlashPage {
	name: Name;
	href: string;
	showInHeader?: boolean;
	underConstruction?: boolean;
}

export const slashPagesMap: Record<Name, SlashPage> = Object.fromEntries(
	slashPages.map((page) => [page.name, page])
) as Record<Name, SlashPage>;

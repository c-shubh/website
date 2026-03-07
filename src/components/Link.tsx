import { ensureTrailingSlash } from '@/utils';

export function Link({ href: h, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	let href = h;
	if (href) {
		href = ensureTrailingSlash(href.toString());
	}

	const isExternal =
		href?.toString().startsWith('http://') || href?.toString().startsWith('https://');
	const externalAttrs = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

	return (
		<a {...props} href={href} {...externalAttrs}>
			{props.children}
		</a>
	);
}

import { getLinkAttributes } from '@/utils';
import React from 'react';

export function Link({
	href: rawHref,
	children,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	const { href, target, rel } = getLinkAttributes(rawHref);

	return (
		<a {...props} href={href} target={target} rel={rel}>
			{children}
		</a>
	);
}

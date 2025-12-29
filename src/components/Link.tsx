export default function Link(
	props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
) {
	const isExternal =
		props.href?.toString().startsWith('http://') || props?.href?.toString().startsWith('https://');
	const externalAttrs = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

	return (
		<a {...props} {...externalAttrs}>
			{props.children}
		</a>
	);
}

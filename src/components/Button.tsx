export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { className, children, ...rest } = props;
	return <button {...rest}>{children}</button>;
}

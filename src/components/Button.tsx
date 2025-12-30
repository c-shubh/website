import { clsx } from '@/utils';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { className, children, ...rest } = props;
	return (
		<button className={clsx(['px-2 py-1', className])} {...rest}>
			{children}
		</button>
	);
}

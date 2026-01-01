export function clsx(...args: unknown[]): string {
	return args.reduce<string>((result: string, arg) => {
		if (typeof arg === 'string') {
			result += ' ' + arg;
		}
		return result;
	}, '');
}

export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}

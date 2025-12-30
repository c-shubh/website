export function clsx(...args: unknown[]) {
	return args.reduce((result: string, arg) => {
		if (typeof arg === 'string') {
			result += ' ' + arg;
		}
		return result;
	}, '');
}

}

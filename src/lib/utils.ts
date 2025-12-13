import type { Snippet } from 'svelte';

export type PropsWithChildren<P, Mode extends 'required' | 'optional' = 'optional'> = P &
	(Mode extends 'required' ? { children: Snippet } : { children?: Snippet });

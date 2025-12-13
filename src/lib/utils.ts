import type { Snippet } from 'svelte';

export type PropsWithChildren<P> = P & { children?: Snippet };

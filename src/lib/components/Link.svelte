<script lang="ts">
	import type { PropsWithChildren } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {}

	let { href, children, ...rest }: PropsWithChildren<Props> = $props();
	// svelte-ignore state_referenced_locally
	href = href || '';

	// svelte-ignore state_referenced_locally
	const isExternal = href.startsWith('http://') || href.startsWith('https://');
	const externalAttrs = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
</script>

<a {href} {...externalAttrs} {...rest}>
	{@render children?.()}
</a>

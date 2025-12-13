<script lang="ts">
	import type { PropsWithChildren } from '$lib/utils';
	import type { HTMLBlockquoteAttributes } from 'svelte/elements';

	interface Props extends HTMLBlockquoteAttributes {}

	let { children, class: className, ...rest }: PropsWithChildren<Props> = $props();
</script>

<blockquote
	class={[
		'm-0 border-s-2 border-gray-300 bg-gray-50 px-4 py-2',
		'[&>:first-child]:mt-0 [&>:last-child]:mb-0',
		className
	]}
	{...rest}
>
	{@render children?.()}
</blockquote>

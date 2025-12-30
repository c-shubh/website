<script lang="ts">
	import type { PropsWithChildren } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {}

	const { children, class: className, ...rest }: PropsWithChildren<Props> = $props();
</script>

<code
	class={['w-fit rounded border border-black/10 bg-gray-100 px-1 py-0.5 font-mono', className]}
	{...rest}
>
	{@render children?.()}
</code>

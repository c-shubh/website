<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHRElement> {}

	let { class: className, ...props }: Props = $props();
</script>

<hr
	class={[
		'mx-0', // ref: https://stackoverflow.com/questions/34365271/hr-inside-container-with-display-flex-become-corrupted
		'h-px border-0 bg-gray-300',
		className
	]}
	{...props}
/>

<script module>
	import a from '$lib/components/mdsvex/a.svelte';
	import code from '$lib/components/mdsvex/code.svelte';

	export { a, code };
</script>

<script>
	const { children } = $props();
</script>

{@render children()}

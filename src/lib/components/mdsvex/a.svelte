<script lang="ts">
	import Link from '../Link.svelte';

	let { children, ...props } = $props();
</script>

<Link {...props}>
	{@render children()}
</Link>

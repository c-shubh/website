<script lang="ts">
	import InlineCode from '../InlineCode.svelte';

	let { children, ...props } = $props();
</script>

<InlineCode {...props}>
	{@render children()}
</InlineCode>

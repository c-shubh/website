<!-- ref: https://github.com/magidoc-org/magidoc/blob/af25d373876624c7ca32e39b09da50aa7c36f5e5/packages/plugins/svelte-marked/src/lib/markdown/components/MarkdownLink.svelte -->

<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import type { Tokens } from 'marked';

	export let token: Tokens.Link;
</script>

<Link href={token.href}>
	<slot />
</Link>

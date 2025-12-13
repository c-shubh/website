<script lang="ts">
	import MarkdownLink from '$lib/components/MarkdownView/MarkdownLink.svelte';
	import Markdown from '@magidoc/plugin-svelte-marked';

	interface Props {
		source: string;
	}

	let { source }: Props = $props();
</script>

<Markdown
	{source}
	renderers={{
		// ref: https://github.com/magidoc-org/magidoc/blob/af25d373876624c7ca32e39b09da50aa7c36f5e5/packages/plugins/svelte-marked/src/lib/markdown/markedConfiguration.ts#L60
		link: MarkdownLink
	}}
/>

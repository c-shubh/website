<script lang="ts">
	import BlockQuote from '$lib/components/BlockQuote.svelte';
	import InlineCode from '$lib/components/InlineCode.svelte';
	import MarkdownView from '$lib/components/MarkdownView/MarkdownView.svelte';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	const quotes = data.quotes;
</script>

<div>
	<h1 class="mt-0">Quotes</h1>
	<p>A collection of quotes and poems I like.</p>
	<p>
		<strong>{quotes.length}</strong> quotes
	</p>
	<div class="space-y-8">
		{#each quotes as result}
			<div>
				<InlineCode class="mb-3 block">{result.dateAdded}</InlineCode>

				<BlockQuote>
					<MarkdownView source={result.text} />
					<MarkdownView source={`~ ${result.attribution}`} />
				</BlockQuote>
			</div>
		{/each}
	</div>
</div>

<script lang="ts">
	import FormattedDate from '$lib/components/FormattedDate.svelte';

	const { data } = $props();
	// svelte-ignore state_referenced_locally
	const { component: Content, metadata } = data;
</script>

<article>
	<div>
		<h1 class="mt-0">{metadata.title}</h1>
		<div>
			<FormattedDate date={new Date(metadata.date)} />
		</div>
	</div>
	<div>
		<Content />
	</div>
</article>

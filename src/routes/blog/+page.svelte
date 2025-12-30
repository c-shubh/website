<script>
	import FormattedDate from '$lib/components/FormattedDate.svelte';
	import Link from '$lib/components/Link.svelte';

	const { data } = $props();
	// svelte-ignore state_referenced_locally
	const { posts } = data;
</script>

<h1 class="mt-0">Blog</h1>
<section class="space-y-4">
	<ul>
		{#each posts as post}
			<li>
				<FormattedDate
					date={new Date(post.metadata.date)}
					class="font-mono text-base text-nowrap"
				/>:
				<Link href={`/blog/${post.slug}`} class="no-underline">
					{post.metadata.title}
				</Link>
			</li>
		{/each}
	</ul>
</section>

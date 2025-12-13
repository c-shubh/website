<script lang="ts">
	import Hr from '$lib/components/Hr.svelte';
	import Link from '$lib/components/Link.svelte';
	import MarkdownView from '$lib/components/MarkdownView/MarkdownView.svelte';

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	const projects = data.projects;
</script>

<h1>Projects</h1>
{#each projects as project, index (project.title)}
	<div>
		<h2>{project.title}</h2>
		<MarkdownView source={project.description} />
		<p>
			<strong>Built with:</strong>
			{project.builtWith.join(', ')}
		</p>
		{#if project.liveUrl}
			<p>
				<strong>Live URL:</strong>
				<Link href={project.liveUrl}>{project.liveUrl}</Link>
			</p>
		{/if}

		{#if project.srcUrl}
			<p>
				<strong>Source URL:</strong>{' '}
				<Link href={project.srcUrl}>{project.srcUrl}</Link>
			</p>
		{/if}
		{#if index !== projects.length - 1}
			<Hr />
		{/if}
	</div>
{/each}

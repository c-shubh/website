<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div
	class={[
		'flex',
		'flex-col',
		'max-w-2xl', // limit max width
		'mx-auto', // center horizontally
		'min-h-screen', // make sure it takes full height
		'px-4' // horizontal padding (required for mobile)
	]}
>
	<Navbar />
	<main class="flex-grow">{@render children()}</main>
	<Footer />
</div>

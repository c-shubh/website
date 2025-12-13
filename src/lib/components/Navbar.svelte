<script>
	import { SITE_TITLE } from '$lib/constants';
	import Hr from './Hr.svelte';
	import Link from './Link.svelte';

	const links = [
		{ href: '/projects', text: 'Projects' },
		{ href: '/tools', text: 'Tools' },
		{ href: '/blog', text: 'Blog' },
		{ href: '/quotes', text: 'Quotes' },
		{ href: '/contact', text: 'Contact' }
	];
</script>

<header class={['my-4']}>
	<nav
		class={[
			// default
			'flex',
			'flex-col',
			'mb-4',
			// sm and up
			'sm:flex-row',
			'sm:justify-between',
			'sm:items-center'
		]}
	>
		<Link href="/" class={['no-underline', 'text-black', 'text-xl', 'font-bold']}>
			{SITE_TITLE}
		</Link>
		<div class={['flex', 'space-x-4', 'flex-wrap']}>
			{#each links as link}
				<Link href={link.href} class={['no-underline', 'font-medium']}>
					{link.text}
				</Link>
			{/each}
		</div>
	</nav>
	<Hr />
</header>

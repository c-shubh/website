<script>
	import { SITE_TITLE } from '$lib/constants';
	import Hr from './Hr.svelte';
</script>

<footer class="my-4 space-y-4 text-center">
	<Hr />
	<span>
		&copy; {new Date().getFullYear()}
		{SITE_TITLE}.
		<br /> Code AGPLv3, Content CC BY-NC-SA 4.0.
	</span>
</footer>

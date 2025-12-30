<script lang="ts">
	import dayjs from 'dayjs';
	import type { HTMLTimeAttributes } from 'svelte/elements';

	interface Props extends HTMLTimeAttributes {
		date: Date;
	}

	const { date, class: className, ...rest }: Props = $props();
</script>

<time dateTime={date.toISOString()} class={className} {...rest}>
	{dayjs(date).format('MMM DD, YYYY')}
</time>

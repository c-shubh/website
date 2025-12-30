<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	const cipherText = 'ynahn.iysg@msgor.ius';
	const magicNumber = 1982;

	const cipher = (str: string, shift: number, decipher = false) => {
		const s = decipher ? (26 - shift) % 26 : shift;
		const n = s > 0 ? s : 26 + (s % 26);
		return str
			.split('')
			.map((l, i) => {
				const c = str.charCodeAt(i);
				if (c >= 65 && c <= 90) return String.fromCharCode(((c - 65 + n) % 26) + 65);
				if (c >= 97 && c <= 122) return String.fromCharCode(((c - 97 + n) % 26) + 97);
				return l;
			})
			.join('');
	};

	const services = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/c-shubh/'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/c-shubh/'
		}
	];

	let visible = $state(false);

	function setVisible(val: boolean) {
		visible = val;
	}
</script>

<h1 class="mt-0">Contact</h1>
<p>
	The best way to reach out to me is by email. I monitor it almost daily so there&apos;s little
	chance that I miss your email.
</p>
<button onclick={() => setVisible(!visible)}>
	{!visible ? 'Show' : 'Hide'} Email
</button>
{#if visible}
	<p>
		<Link href={`mailto:${cipher(cipherText, magicNumber, true)}`}>
			{cipher(cipherText, magicNumber, true)}
		</Link>
	</p>
{/if}

<h2>Links</h2>
<p>My public profiles on various platforms:</p>
<ul>
	{#each services as service, index}
		<li>
			<span class="font-bold">{service.name}:</span>{' '}
			<Link href={service.url}>{service.url}</Link>
		</li>
	{/each}
</ul>

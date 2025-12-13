<script>
	import computer from '$lib/assets/images/computer.gif';
	import hello from '$lib/assets/images/hello.gif';
	import Hr from '$lib/components/Hr.svelte';
</script>

<div class={['flex', 'flex-col']}>
	<header class={['mt-2', 'mb-8']}>
		<h1
			class={[
				'relative',
				'mt-0',
				'text-center',
				'sm:text-[1.6rem]' // make text small to fit hello bubble gif
			]}
		>
			I&apos;m a techie who loves building things.
			<img src={hello} alt="Hello GIF" width={65} class="absolute bottom-0 hidden sm:inline" />
		</h1>
		<p class="mb-0 text-center text-lg whitespace-pre-wrap">
			{'Hacker  •  Software Engineer  •  Builder  •  Learner'}
		</p>
	</header>
	<Hr />
	<main>
		<section class="">
			<!-- TODO: make it look better: 
			 - icons 
			 - different layout 
			 -->
			<div class="flex items-center gap-2">
				<h3 class="mt-6">Tech I Use</h3>
				<img src={computer} alt="Computer GIF" width={32} class="hidden sm:inline" />
				<!-- <ExportedImage src={'/images/computer.gif'} alt="Computer gif" width={32} height={28} /> -->
			</div>
			<ul class="mt-0">
				<li>Typescript, React, HTML, CSS, TailwindCSS, Redux and Webpack/Vite for web apps.</li>
				<li>Node.js Express for backend.</li>
				<li>React Native, NativeWind, React Native Paper, and Redux for mobile apps.</li>
				<li>Python for scripting and automation.</li>
				<li>Java for practicing Data Structure and Algorithms.</li>
				<li>Rust for building CLI applications.</li>
				<li>Tools: Git, Docker.</li>
				<li>OS: Linux.</li>
				<li>Current Distro: Linux Mint Cinnamon. Previously: Xubuntu, Arch Linux + XFCE.</li>
			</ul>
		</section>
	</main>
</div>

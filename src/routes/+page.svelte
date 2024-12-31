<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade, crossfade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let showName = false
	let showText = false
	let showButtons = false

	onMount(() => {
		// onmount logic
		setTimeout(() => {
			showButtons = true
		}, 100)
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		{#if showButtons}
		<div class="text-[50px] flex flex-row" in:fade={{duration: 500, delay: 0}}>
			<p class="text-secondary-500 mr-4">Mark</p>
			<p class="text-primary-500">Lund</p>
		</div>
		<p class="text-black" in:fade={{duration: 500, delay: 100}}>Web Designer // Web Developer // User Experience</p>
		<div class="flex justify-center space-x-2">
			<a
				class="btn bg-gradient-to-br variant-gradient-primary-secondary w-[120px] h-[48px] md:h-[32px]"
				href="/projects"
				rel="noreferrer"
				in:fly={{ y: 20, duration: 500, delay: 200 }}
			>
				Projects
			</a>
			<a
				class="btn bg-gradient-to-br variant-gradient-primary-secondary w-[120px] h-[48px] md:h-[32px]"
				href="/blog"
				rel="noreferrer"
				in:fly={{ y: 20, duration: 500, delay: 300 }}
			>
				Blog
			</a>
		</div>
		{/if}
	</div>
</div>

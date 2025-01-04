<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade, crossfade } from 'svelte/transition';

	let showButtons = false;

	onMount(() => {
		// onmount logic
		setTimeout(() => {
			showButtons = true;
		}, 100);
	});

	let mouseX = 0;
	let mouseY = 0;

	function handleMouseMove(event: any) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
</script>

<div
	class="h-full w-full bg-image"
	on:mousemove={handleMouseMove}
	role="presentation"
	style="--mouseX: {mouseX}; --mouseY: {mouseY}"
>
	<div class="container h-full mx-auto flex justify-center items-center">
		<div class="space-y-10 text-center flex flex-col items-center">
			{#if showButtons}
				<div
					class=" bg-white pb-5 pt-8 pl-5 pr-5 rounded-lg shadow-xl flex flex-col items-center"
					in:fade={{ duration: 500, delay: 0 }}
				>
					<div class="flex flex-row mb-10">
						<p class="text-[72px] text-secondary-500 mr-4">Mark</p>
						<p class="text-[72px] text-primary-500">Lund</p>
					</div>
					<p class=" text-black font-bold font-mono mb-5" in:fade={{ duration: 500, delay: 100 }}>
						Web Design // Web Development // User Experience
					</p>
					<div class="flex justify-center space-x-2">
						<a
							class="shadow-xl btn bg-gradient-to-br variant-gradient-primary-secondary w-[210px] h-[48px] md:h-[32px]"
							href="/projects"
							rel="noreferrer"
							in:fly={{ y: 20, duration: 500, delay: 200 }}
						>
							Projects
						</a>
						<a
							class="shadow-xl btn bg-gradient-to-br variant-gradient-primary-secondary w-[210px] h-[48px] md:h-[32px]"
							href="/blog"
							rel="noreferrer"
							in:fly={{ y: 20, duration: 500, delay: 300 }}
						>
							Blog
						</a>
				</div>
				
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.bg-image {
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('sitebg3.png');
		background-size: cover;
		background-position: calc(50% + (var(--mouseX) * 0.01px)) calc(50% + (var(--mouseY) * 0.01px));
		background-repeat: no-repeat;
		background-attachment: fixed;
	}
</style>

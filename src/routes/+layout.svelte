<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Page from './+page.svelte';
</script>

<!-- App Shell -->
<AppShell class="bg-neutral-200">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<header class="bg-white shadow-lg items-center h-[64px] flex flex-row justify-center pr-4 pl-4">
			<div class="w-full lg:w-[70rem] flex flex-row justify-between items-center">
				<div>
					<a href="/">
						<h1 class="h1 text-[32px] hidden md:block">
							<span class="gradient-heading font-bold font-mono">marklund.tech</span>
						</h1>
						<img class="max-h-[48px] md:hidden" src="favicon.png" alt="Mark Lund" />
					</a>
				</div>
				<div>
					<a
						class="mr-2 btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary w-[80px] h-[48px] md:h-[32px]"
						href="/projects"
					>
						Projects
					</a>
					<a
						class="mr-2 btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary w-[80px] h-[48px] md:h-[32px]"
						href="/resume"
					>
						Resume
					</a>
					<a
						class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary w-[80px] h-[48px] md:h-[32px]"
						href="/blog"
					>
						Blog
					</a>
				</div>
			</div>
		</header>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<footer class="bg-neutral-900 text-neutral-100 text-center p-4">
		<a href="https://linkedin.com/in/mark-s-lund" target="_blank" class="text-secondary-500 p-2 btn"
			>LinkedIn</a
		><a href="https://github.com/marklund117" target="_blank" class="text-secondary-500 p-2 btn"
			>Github</a
		>
		<p class="underline">marklund117@gmail.com</p>
		<p>Designed and Developed by Mark Lund</p>
		<p>&copy;2025 Mark Lund</p>
	</footer>
</AppShell>

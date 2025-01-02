<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell class="bg-surface-100">
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
						class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary w-[80px] h-[48px] md:h-[32px]"
						href="/projects"
					>
						Projects
					</a>
					<a
						class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary w-[80px] h-[48px] md:h-[32px]"
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
		<p>Footer test content</p>
		<p>&copy; 2025 Mark Lund</p>
	</footer>
</AppShell>

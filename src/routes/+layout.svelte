<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell class="bg-surface-100">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-white" shadow="shadow-lg">
			<svelte:fragment slot="lead">
				<a href="/">
				<h1 class="h1 text-[32px] hidden md:block"><span class="gradient-heading font-bold font-mono">marklund.tech</span></h1>
				<img class="max-h-[48px] md:hidden" src="favicon.png" alt="Mark Lund" />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
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
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

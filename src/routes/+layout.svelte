<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell class="bg-surface-100">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-surface-200" shadow="shadow-lg">
			<svelte:fragment slot="lead">
				<a href="/">
				<h1 class="h1"><span class="gradient-heading font-bold font-mono">marklund.tech</span></h1>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary"
					href="/projects"
				>
					Projects
				</a>
				<a
					class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary"
					href="/resume"
				>
					Resume
				</a>
				<a
					class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary"
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

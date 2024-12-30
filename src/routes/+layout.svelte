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
				<h1 class="h1"><span class="gradient-heading font-bold font-mono">marklund.tech</span></h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Projects
				</a>
				<a
					class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
				<a
					class="btn btn-sm bg-gradient-to-br variant-gradient-primary-secondary"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					Blog
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

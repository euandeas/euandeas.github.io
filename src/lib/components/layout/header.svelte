<script>
	import Logo from '$lib/images/logo.svelte';

	let navitems = [
		{ name: "Projects", link:"../projects" },
		{ name: "Blog", link:"../blog" }
  	];
</script>

<header class="sticky top-0">
	<div class="px-4 sm:px-6 md:px-8">
		<div class="relative pt-6 lg:pt-8 flex items-center justify-between">
			<a href="/"><Logo class="w-auto h-16"/></a>
			<div class="flex items-center">
				<div class="md:hidden">
					<p>Button</p>
				</div>
				<div class="hidden md:flex items-center">
					<nav>
						<ul class="flex items-center space-x-8">
							{#each navitems as item}
							<li>
								<a href="{item.link}">{item.name}</a>
							</li>
							{/each}
						</ul>
					</nav>
				</div>
				<div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
					<p>Toggle</p>
				</div>
			</div>
		</div>
	</div>
</header>

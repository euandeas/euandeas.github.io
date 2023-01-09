<script>
	import { browser } from '$app/environment';

	import Logo from '$lib/svg/logo.svelte';
	import Menu from '$lib/svg/icon/menu.svelte';
	import Sun from '$lib/svg/icon/sun.svelte';
	import Moon from '$lib/svg/icon/moon.svelte';

	let navitems = [
		{ name: 'Projects', link: '/' },
		{ name: 'Blog', link: '/' }
	];

	let darkMode = true;

	function toggleTheme() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<header class="relative">
	<div class="px-4 sm:px-6 md:px-8 bg-white dark:bg-black">
		<div class="relative pt-6 pb-6 lg:pt-8 flex items-center justify-between">
			<a href="/"><Logo class="w-auto h-16" /></a>
			<div class="flex items-center">
				<div class="md:hidden">
					<Menu />
				</div>
				<div class="hidden md:flex items-center">
					<nav>
						<ul class="flex items-center space-x-8">
							{#each navitems as item}
								<li>
									<a href={item.link}>{item.name}</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
				<div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
					<button on:click={toggleTheme}>
						<span class="dark:hidden">
							<Sun />
						</span>
						<span class="hidden dark:inline">
							<Moon />
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</header>

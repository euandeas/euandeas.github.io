<script>
	import Section from '$lib/components/base/section.svelte';
	import Card from '$lib/components/base/card.svelte';
</script>

<Section>
	<h1
		class="text-left text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight dark:text-white pb-4"
	>
		Skills
	</h1>
	<ol class="flex items-center w-full px-2 lg:px-1">
		<li
			class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-slate-900 dark:after:border-white"
		>
			<span
				class="flex items-center justify-center w-4 h-4 rounded-full lg:h-6 lg:w-6 bg-slate-900 dark:bg-white shrink-0"
			/>
		</li>
		<li class="flex items-center">
			<span
				class="flex items-center justify-center w-4 h-4 rounded-full lg:h-6 lg:w-6 bg-slate-900 dark:bg-white shrink-0"
			/>
		</li>
	</ol>
	<ol class="flex items-center w-full pt-1">
		<li class="flex w-full items-center">
			<p>High</p>
		</li>
		<li class="flex items-center">
			<p>Low</p>
		</li>
	</ol>
	<ol class="flex items-center w-full pt-1 h-22">
		<li class="relative flex w-full items-center">
			<Card class="absolute left-6 top-5"><p>C#</p></Card>
			<Card class="absolute left-2 top-20"><p>Android for .Net</p></Card>
			<Card class="absolute left-6 top-5"><p>Git</p></Card>
		</li>
		<li class="relative flex w-full items-center">
			<Card class="absolute left-6 top-5"><p>High</p></Card>
		</li>
		<li class="relative flex w-full items-center">
			<Card class="absolute left-6 top-5"><p>High</p></Card>
		</li>
	</ol>
</Section>

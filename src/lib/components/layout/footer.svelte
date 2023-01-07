<script>
	import Socials from '../base/socials.svelte';

	let currentYear = new Date().getFullYear();
</script>

<footer class="w-full">
	<div class="flex flex-col items-center justify-center space-y-2">
		<p class="text-sm">© Euan Deas {currentYear}</p>
		<Socials />
	</div>
</footer>

<script>
	import GitHub from '$lib/svg/social/github.svelte';
	import LinkedIn from '$lib/svg/social/linkedin.svelte';
	import Mail from '$lib/svg/social/mail.svelte';
</script>

<div class="flex items-center space-x-4">
	<a
		href="mailto:euandeasapps@gmail.com"
		target="_blank"
		rel="noopener"
		title="Send an email to euandeasapps@gmail.com"
	>
		<Mail />
	</a>
	<a
		href="https://github.com/euandeas"
		target="_blank"
		rel="noreferrer"
		title="See my GitHub profile"
	>
		<GitHub />
	</a>
	<a
		href="https://www.linkedin.com/in/euandeas/"
		target="_blank"
		rel="noreferrer"
		title="Connect on LinkedIn"
	>
		<LinkedIn />
	</a>
</div>

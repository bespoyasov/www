<script>
	export let data;
</script>

<main class="post">
	{@html data.content}
</main>

<style>
	.post {
		margin-block-end: 1em;
	}

	@media (min-width: 800px) {
		.post {
			inline-size: 75%;
			max-inline-size: 800px;
		}
	}
</style>

<script>
	export let data;

	const { t } = data;
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="error">
	<h1>{t.heading}</h1>
	<p>{t.message}</p>
</main>

<style>
	.error {
		min-height: 60dvh;

		display: grid;
		justify-content: center;
		align-content: center;

		text-align: center;
	}

	.error h1 {
		font-size: 8.5rem;
		line-height: 0.9;
		margin: 0;
	}
</style>

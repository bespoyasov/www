<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main class="error">
	<h1>{t.title}</h1>
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

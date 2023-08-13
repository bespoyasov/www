<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main class="tags">
	<header class="header">
		<h1>{t.title}</h1>
		<p>{t.description}</p>
	</header>
</main>

<style>
	.header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 0 1em;
	}

	.header h1 {
		width: 100%;
	}

	.header p {
		margin-block-end: 0.5em;
	}
</style>

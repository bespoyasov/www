<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main>
	<h1>{t.title} <sup><a class="caps" href="/rss.xml">{t.rss}</a></sup></h1>
	<p>{t.description}</p>

	{#each data.notes as [year, notes]}
		<section class="section">
			<h2>{year}</h2>
			<!-- TODO: PostList. -->
		</section>
	{/each}
</main>

<style>
	.section {
		margin-block: 2em;
	}

	.section h2 {
		margin-block-start: 0;
	}
</style>

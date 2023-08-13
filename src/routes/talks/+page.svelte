<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main>
	<h1>{t.title}</h1>
	<p>{t.description}</p>
</main>

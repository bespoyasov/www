<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main>
	<section>
		<h1>{t.title}</h1>
		<p>{t.intro}</p>
	</section>

	<section>
		<h2>{t.archive.title}</h2>
		<p>{t.archive.about}</p>
	</section>

	<section>
		<h2>{t.misc.title}</h2>
		<p>{t.misc.about}</p>
	</section>

	<section>
		<h2>{t.limb.title}</h2>
		<p>{t.limb.about}</p>
	</section>
</main>

<style>
	section {
		margin-block-end: 4rem;
	}
</style>

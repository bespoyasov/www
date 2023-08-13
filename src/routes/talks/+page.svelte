<script>
	import Meta from '../../components/Meta.svelte';
	import PublicTalkList from '../../components/PublicTalkList.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main>
	<h1>{t.title}</h1>
	<p>{t.description}</p>
	<PublicTalkList talks={data.talks} />
</main>

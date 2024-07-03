<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t } = data;

	const license = {
		GNU: {
			name: 'GNU GPL v3.0',
			link: 'https://github.com/bespoyasov/www/blob/master/LICENSE'
		},
		CC: {
			name: 'CC BY-NC-SA 4.0',
			link: 'https://github.com/bespoyasov/www/blob/master/LICENSE-SA.md'
		}
	};
</script>

<Meta metadata={t} />

<main>
	<h1>{t.title}</h1>
	<p>{t.intro}</p>

	<section>
		<h2>{t.source.title}</h2>
		<p>{t.source.premise} <a href={license.GNU.link}>{license.GNU.name}</a>. {t.source.clause}</p>
	</section>

	<section>
		<h2>{t.content.title}</h2>
		<p>{t.content.premise} <a href={license.CC.link}>{license.CC.name}</a>. {t.content.clause}</p>
	</section>
</main>

<style>
	@media (min-width: 800px) {
		main {
			inline-size: 75%;
			max-inline-size: 800px;
		}
	}
</style>

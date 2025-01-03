<script>
	import Meta from '../../components/Meta.svelte';
	import ProjectList from '../../components/ProjectList.svelte';

	export let data;

	const { t } = data;
</script>

<Meta metadata={t} />

<main>
	<section>
		<h1>{t.title}</h1>
		<p>{t.about}</p>
		<ProjectList projects={data.projects} />
	</section>

	<section>
		<h2 id="personal">{t.personal.title}</h2>
		<p>{t.personal.about}</p>
		<ProjectList projects={data.personal} />
	</section>

	<section>
		<h2 id="archive">{t.archive.title}</h2>
		<p>{t.archive.about}</p>
		<ProjectList projects={data.archived} />
	</section>

	<section>
		<h2 id="misc">{t.misc.title}</h2>
		<p>{t.misc.about}</p>
		<ProjectList projects={data.misc} />
	</section>

	<section>
		<h2 id="limb">{t.limb.title}</h2>
		<p>{t.limb.about}</p>
		<ProjectList projects={data.limb} />
	</section>

	<section>
		<h2 id="trenches">{t.trenches.title}</h2>
		<p>{t.trenches.about}</p>
		<ProjectList projects={data.trenches} />
	</section>
</main>

<style>
	section {
		margin-block-end: 4rem;
	}
</style>

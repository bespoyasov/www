<script>
	import Meta from '../../../components/Meta.svelte';

	import PostList from '../../../components/PostList.svelte';
	import ProjectList from '../../../components/ProjectList.svelte';
	import PublicTalkList from '../../../components/PublicTalkList.svelte';

	export let data;

	const { t, tag, notes, talks, projects, similar } = data;
</script>

<Meta metadata={t} />

<main class="tag">
	<h1>#{tag}</h1>
	<p>{t.description} <a href="/tags">{t.other}</a></p>

	{#if notes.length}
		<section>
			<h2><a class="text" href="/blog">{t.notes.title}</a></h2>
			<p>{t.notes.about}</p>

			{#each notes as [year, notes]}
				<h3>{year}</h3>
				<PostList {notes} />
			{/each}
		</section>
	{/if}

	{#if talks.length}
		<section>
			<h2><a class="text" href="/talks">{t.talks.title}</a></h2>
			<p>{t.talks.about}</p>
			<PublicTalkList {talks} level={3} />
		</section>
	{/if}

	{#if projects.length}
		<section>
			<h2><a class="text" href="/projects">{t.projects.title}</a></h2>
			<p>{t.projects.about}</p>
			<ProjectList {projects} level={3} />
		</section>
	{/if}

	{#if similar.length}
		<section>
			<h2>{t.similar.title}</h2>
			<p>{t.similar.about}</p>

			<ul class="similar">
				{#each similar as tag}
					<li><a href={`/tags/${tag}`}>#{tag}</a></li>
				{/each}
			</ul>
		</section>
	{/if}
</main>

<style>
	.tag h2 {
		margin-block: 0 -1rem;
	}

	.tag section {
		margin-block: 2rem 4rem;
	}

	.similar {
		--rows: 16;
		--cols: 1;

		margin-block: 0;

		display: grid;
		grid-auto-flow: column;
		grid-template-rows: repeat(var(--rows), auto);
		grid-template-columns: repeat(var(--cols), 1fr);
	}

	@media (min-width: 480px) {
		.similar {
			--rows: 8;
			--cols: 2;
		}
	}

	@media (min-width: 800px) {
		.similar {
			--rows: 4;
			--cols: 4;
		}
	}
</style>

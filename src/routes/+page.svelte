<script>
	import Meta from '../components/Meta.svelte';

	export let data;

	const { t, notes, projects, talks, tags } = data;
</script>

<Meta metadata={t} />

<main>
	<section class="about">
		<picture>
			<source srcset="/photo/2023-06.avif" type="image/avif" />
			<source srcset="/photo/2023-06.webp" type="image/webp" />
			<img src="/photo/2023-06.jpg" alt={t.photo} width="800" height="533" />
		</picture>

		<h1 class="visually-hidden">{t.intro}</h1>
		{#each t.about as paragraph}
			<p>{paragraph}</p>
		{/each}
	</section>

	<section>
		<h2>{t.projects}</h2>
		<ul>
			{#each projects as { title, description, redirect }}
				<li><a href={redirect}>{title}</a>, {description.toLocaleLowerCase()}</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>{t.posts}</h2>
		<ul>
			{#each notes as note}
				<li>
					<a href={`/blog/${note.slug}`}>{note.title}</a>{#if note.favorite}&nbsp;⭑{/if}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>{t.talks}</h2>
		<ul>
			{#each talks as talk}
				<li>
					<a href={`/talks/${talk.slug}`}>{talk.title}</a>, {talk.summary.toLocaleLowerCase()}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>{t.tags}</h2>
		<ul class="tags">
			{#each tags as tag}
				<li><a href={`/tags/${tag}`}>#{tag}</a></li>
			{/each}
		</ul>
	</section>
</main>

<style>
	/* Grid. */

	main {
		display: grid;
		gap: 1rem;
		max-inline-size: 560px;
	}

	@media (min-width: 860px) {
		main {
			max-inline-size: 100%;
			grid-template-columns: 3fr 2fr;
			grid-template-rows: repeat(5, auto);
			gap: 1rem 4rem;
		}

		.about {
			grid-row: 1 / -1;
		}
	}

	/* Elements. */

	img {
		aspect-ratio: 1.5;
		max-height: initial;
	}

	h2 {
		margin: 0 0 -1em;
		font-size: 1em;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.5em;
	}
</style>

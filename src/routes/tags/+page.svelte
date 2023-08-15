<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t, tagsByName, tagsByFrequency } = data;

	const groups = [tagsByName, tagsByFrequency];
	const options = Object.keys(t.labels);
</script>

<Meta metadata={t} />

<main class="tags">
	<header class="header">
		<h1>{t.title}</h1>
		<p>{t.description}</p>
	</header>

	{#each groups as group, index}
		{@const shown = options[index]}
		<div class="content" data-group={shown} hidden={index > 0}>
			{#each group as [title, tags]}
				<section>
					<h2>{title}</h2>
					<ul>
						{#each tags as [tag, used]}
							<li>
								<a href={`/tags/${tag}`}>#{tag}</a><sup class="used">&thinsp;{used}</sup>
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	{/each}
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

	.tags h2,
	.tags ul {
		margin-block: 0;
	}

	.used {
		color: var(--color-dimmed);
	}

	.content {
		--columns: 1;

		margin-block: 1.5em;
	}

	.content:not([hidden]) {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 2.5em;
	}

	@media (min-width: 400px) {
		.content {
			--columns: 2;
		}
	}

	@media (min-width: 800px) {
		.content {
			--columns: 3;
		}
	}

	@media (min-width: 1000px) {
		.content {
			--columns: 4;
		}
	}
</style>

<script>
	import Meta from '../../components/Meta.svelte';

	export let data;

	const { t, tagsByName, tagsByFrequency } = data;

	const groups = [tagsByName, tagsByFrequency];
	const options = Object.keys(t.labels);
	const selected = options.at(0);
</script>

<Meta metadata={t} />

<main class="tags">
	<header class="header">
		<h1>{t.title}</h1>
		<p>{t.description}</p>

		<form class="group">
			{#each options as value}
				{@const label = data.t.labels[value]}
				<label>
					<input
						type="radio"
						name="order"
						class="visually-hidden"
						checked={value === selected}
						{value}
					/>
					<span>{label}</span>
				</label>
			{/each}
		</form>
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

	/* Radio Group. */

	.group {
		display: flex;
		-webkit-user-select: none;
		user-select: none;
	}

	.group label {
		margin-inline-end: -1px;
		white-space: nowrap;
	}

	.group span {
		padding: 0.025em 0.5em;
		border: 1px solid var(--color-adornment);
		cursor: pointer;
	}

	.group span:hover {
		color: var(--color-accents);
	}

	.group :focus-within span {
		outline: 5px auto Highlight;
		outline: 5px auto -webkit-focus-ring-color;
	}

	.group :checked + span {
		color: var(--color-foreground);
		background-color: var(--color-adornment);
		cursor: default;
	}

	.group :first-child span {
		border-radius: 5px 0 0 5px;
	}

	.group :last-child span {
		border-radius: 0 5px 5px 0;
	}

	/* Group ~ Content binding. */

	.header:has([value='alphabet']:checked) ~ [data-group='frequency'],
	.header:has([value='frequency']:checked) ~ [data-group='alphabet'] {
		display: none;
	}
</style>

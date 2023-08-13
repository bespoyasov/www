<script context="module">
	import { locale } from '../lib/config';

	const t = {
		en: { video: 'Video', slides: 'Slides', sources: 'Source Code' },
		ru: { video: 'Видео', slides: 'Слайды', sources: 'Код' }
	}[locale];
</script>

<script>
	export let talks;
	export let level = 2;
</script>

<ul class="reset talks" class:compact={level > 2}>
	{#each talks as talk}
		<li>
			<article class="talk">
				<svelte:element this={`h${level}`}>
					<a href={`/talks/${talk.slug}`}>{talk.title}</a>
				</svelte:element>

				<p>{talk.description}</p>

				<footer>
					<div class="meta">
						<time datetime={talk.datetime}>{talk.date.full}</time>
						{#if talk.materials?.includes('video')}<span>{t.video} ✓</span>{/if}
						{#if talk.materials?.includes('slides')}<span>{t.slides} ✓</span>{/if}
						{#if talk.materials?.includes('sources')}<span>{t.sources} ✓</span>{/if}
					</div>

					<ul class="reset tags">
						{#each talk.tags as tag}
							<li><a class="text" href={`/tags/${tag}`}>#{tag}</a></li>
						{/each}
					</ul>
				</footer>
			</article>
		</li>
	{/each}
</ul>

<style>
	.talks {
		--columns: 1;

		margin-block: 2.5em;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 2em;
	}

	.compact {
		margin-block: 1.5em;
	}

	.talks footer {
		font-size: var(--fs-smaller);
	}

	.talks p {
		margin-block: 0.5em;
	}

	.talks h2,
	.talks h3 {
		margin: 0;
		line-height: 1.2;
	}

	.talk {
		position: relative;
		padding: 1.25em;
	}

	.talk,
	.talk::before,
	.talk::after {
		background-color: var(--color-background);
		box-shadow: 0 1px 3px var(--color-adornment);
	}

	.talk::before,
	.talk::after {
		content: '';
		z-index: -1;
		position: absolute;
		inset: 0px;
	}

	.talk::before {
		rotate: z 2deg;
	}

	.talk::after {
		rotate: z -2deg;
	}

	.meta,
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.75em;
	}

	@media (min-width: 720px) {
		.talks {
			--columns: 2;
		}
	}

	@media (min-width: 1000px) {
		.talks {
			--columns: 3;
		}
	}

	@media (prefers-color-scheme: dark) {
		.talk {
			background-color: color-mix(in oklab, var(--color-dimmed) 60%, black 40%);
		}

		.talk::before,
		.talk::after {
			display: none;
		}
	}
</style>

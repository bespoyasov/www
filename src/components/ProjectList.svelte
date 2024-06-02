<script context="module">
	import { locale } from '../lib/config';
</script>

<script>
	export let projects;
	export let level = 2;
</script>

<ul class="reset projects" class:compact={level > 2}>
	{#each projects as project}
		<li>
			<article
				class="project"
				class:inverted={project.inverted}
				style={`--background: ${project.color}`}
			>
				<header class="header">
					<svelte:element this={`h${level}`}>{project.title}</svelte:element>
					<span class="emoji" class:reduced={locale !== 'en'} aria-hidden="true">
						{project.emoji}
					</span>
				</header>

				<div class="content">
					<p>{project.description}</p>
					<a class="link" href={project.redirect} aria-label="See Project" />
				</div>
			</article>
		</li>
	{/each}
</ul>

<style>
	.projects {
		--columns: 1;
		--radius: 1.5rem;

		margin-block: 2.5em;

		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 1em;
	}

	.compact {
		margin-block: 1.5em;
	}

	.project {
		padding: 1.5em;
		min-block-size: 200px;

		position: relative;
		display: flex;
		flex-direction: column;

		color: #000;
		background-color: var(--background);
		border-radius: var(--radius);
	}

	.inverted {
		color: #fff;
	}

	.emoji {
		font-size: 3em;
		line-height: 1;

		-webkit-user-select: none;
		user-select: none;
	}

	.reduced {
		font-size: 2em;
		margin-inline: -0.05em;
	}

	.header {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
		gap: 0.5em;
	}

	.header h2,
	.header h3 {
		margin: 0;
		font-size: 1.6em;
		line-height: 1.2;
	}

	.content p {
		margin: 0;
	}

	.link {
		position: absolute;
		inset: 0;
		border-radius: var(--radius);
	}

	@media (min-width: 540px) {
		.projects {
			--columns: 2;
		}

		.project {
			aspect-ratio: 1;
		}
	}

	@media (min-width: 760px) {
		.projects {
			--columns: 3;
		}
	}

	@media (min-width: 1000px) {
		.projects {
			--columns: 4;
		}
	}

	@media (hover: hover) {
		.project:is(:hover, :focus-within) {
			scale: 1.025;
			rotate: 10 0 1 -5deg;
		}

		.link {
			opacity: 0;
			box-shadow: 1px 2px 2px var(--color-adornment);
		}

		.project:is(:hover, :focus-within) .link {
			opacity: 1;
		}

		@media (prefers-reduced-motion: no-preference) {
			.projects {
				--transition: 0.15s;
			}

			.project {
				transition:
					scale var(--transition),
					rotate var(--transition);
			}

			.link {
				transition: opacity var(--transition);
			}
		}
	}

	@supports (background: oklch(from #ffffff l c h)) {
		@media (color-gamut: p3) {
			.project {
				--base: oklch(from var(--background) l calc(c + 0.035) h);
				--start: oklch(from var(--base) calc(l - 0.03) c h);
				--stop: oklch(from var(--base) calc(l + 0.07) c h);

				background-color: var(--base);
				background-image: linear-gradient(45deg, var(--start), var(--stop));
			}
		}
	}
</style>

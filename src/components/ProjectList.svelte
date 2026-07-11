<script context="module">
	import { locale } from '../lib/config';

	export const t = {
		en: { cta: 'See Project' },
		ru: { cta: 'Подробнее о клиенте' }
	}[locale];
</script>

<script>
	export let projects;
	export let level = 2;
</script>

<ul class="reset projects" class:compact={level > 2}>
	{#each projects as project}
		{@const isCompany = project.category === 'company'}

		<li>
			<article
				class="project"
				class:inverted={project.inverted}
				style={`--background: ${project.color}`}
			>
				{#if isCompany}
					<img
						class="logo"
						data-company={project.slug}
						src={`/images/projects/${project.slug}/logo.avif`}
						aria-hidden="true"
						alt=""
					/>
				{/if}

				<header class="header" class:company={isCompany}>
					<svelte:element this={`h${level}`}>{project.title}</svelte:element>

					{#if project.years}
						<span class="period">{project.years}</span>
					{:else if project.datetime}
						<span class="period">{new Date(project.datetime).getFullYear()}</span>
					{/if}
				</header>

				<div class="content">
					<p>{project.description ?? project.position}</p>
					<a class="link" href={project.redirect} aria-label={t.cta} />
				</div>
			</article>
		</li>
	{/each}
</ul>

<style>
	.projects {
		--columns: 1;
		--radius: 1.8rem;

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
		overflow: clip;

		position: relative;
		display: flex;
		flex-direction: column;

		color: #000;
		background-color: var(--background);
		border-radius: var(--radius);
		box-shadow: 0 1px 2px var(--color-adornment);
	}

	.inverted {
		color: #fff;
	}

	.period {
		max-width: 6ch;
		font-size: var(--fs-smaller);
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

	.header > * {
		z-index: 0;
	}

	.header:not(.company)::before {
		content: '';
		display: block;

		position: absolute;
		inset: 0;

		border-radius: 0 var(--radius) 0 0;
		background-image: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 50%,
			rgba(255, 255, 255, 0.1) 85%,
			rgba(255, 255, 255, 0.1) 90%,
			rgba(255, 255, 255, 0.05) 100%
		);
	}

	.content p {
		margin: 0;
	}

	.logo {
		--offset: 0em;
		--size: calc(100% - calc(2 * var(--offset)));

		z-index: 0;
		position: absolute;
		inset: var(--offset);

		max-block-size: var(--size);
		max-inline-size: var(--size);
		block-size: var(--size);
		inline-size: var(--size);

		object-fit: cover;
		object-position: center;
		box-shadow: none;
	}

	.header,
	.content {
		z-index: 1;
	}

	.link {
		position: absolute;
		inset: 0;
		z-index: 1;
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

		.project:focus-within {
			outline: 2px solid Highlight;
			outline-offset: 3px;
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
		}
	}

	/* Logo-specific styles: */

	[data-company='0x'] {
		--offset: -2em;

		object-fit: contain;
		opacity: 0.2;
	}

	[data-company='spotify'] {
		mix-blend-mode: overlay;
		opacity: 0.2;
	}

	@media (min-width: 540px) {
		[data-company='spotify'] {
			--offset: 1em;

			inset-block-start: calc(1.2 * var(--offset));
		}
	}

	[data-company='wbd'] {
		--offset: -2em;

		object-fit: cover;
		filter: grayscale(100%);
		opacity: 0.2;
	}

	[data-company='king'] {
		--offset: -1em;

		filter: brightness(50%);
		opacity: 0.1;
	}

	[data-company='simployer'] {
		--offset: -5em;

		opacity: 0.2;
	}

	[data-company='drive2'] {
		--offset: -0.5em;

		object-fit: cover;
		object-position: 2em center;
		opacity: 0.2;
	}

	[data-company='netology'] {
		--offset: -1em;

		opacity: 0.15;
	}

	[data-company='dodo'] {
		--offset: -1em;

		opacity: 0.2;
	}
</style>

<script context="module">
	import { locale } from '../lib/config';

	const t = {
		en: { label: 'Showing code sample in:' },
		ru: { label: 'Пример кода на:' }
	}[locale];

	const languageNames = {
		js: 'JavaScript',
		ts: 'TypeScript',
		py: 'Python',
		fsharp: 'F#'
	};
</script>

<script>
	export let options;

	let languages = options.split(',');
	let current = languages[0];
</script>

<figure class="tabs" data-show={current}>
	<figcaption class="controls">
		<span class="visually-hidden">{t.label}</span>

		{#each languages as lang}
			{@const active = current === lang}
			{@const label = languageNames[lang]}

			<button class="tab" type="button" data-lang={lang} aria-current={active}>
				{label}
			</button>
		{/each}
	</figcaption>

	<div class="panel">
		<slot />
	</div>
</figure>

<style>
	.controls {
		margin-block-end: calc(-1em - 1px);
		display: flex;

		font-style: normal;
	}

	.tab {
		--corner-radius: 5px;
		--height-growth: 3px;

		min-inline-size: 60px;
		margin-inline-end: -1px;
		padding: 0.2rem 0.75rem;

		color: inherit;
		font: inherit;
		background: none;

		border: 1px solid var(--color-adornment);
		border-bottom: 0;
		border-top-left-radius: var(--corner-radius);
		border-top-right-radius: var(--corner-radius);

		cursor: pointer;
		appearance: none;
		user-select: none;
		-webkit-user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.tab[aria-current='true'] {
		background-color: var(--color-adornment);
		cursor: default;
		pointer-events: none;
	}

	.tab:not([aria-current='true']):hover,
	.tab:not([aria-current='true']):focus {
		margin-top: calc(-1 * var(--height-growth));
		padding-bottom: calc(0.2rem + var(--height-growth));
	}

	:global([data-show='js'] pre:not(.language-js)),
	:global([data-show='ts'] pre:not(.language-ts)),
	:global([data-show='py'] pre:not(.language-py)),
	:global([data-show='fsharp'] pre:not(.language-fsharp)) {
		display: none;
	}

	/* Hide default language name labels
	   since we have labelled buttons: */

	:global(.tabs pre[class*='language-']::before) {
		display: none;
	}
</style>

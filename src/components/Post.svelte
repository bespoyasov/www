<script context="module">
	import { locale } from '../lib/config';

	const t = {
		en: { label: 'Other posts' },
		ru: { label: 'Другие посты' }
	}[locale];
</script>

<script>
	import Support from './Support.svelte';

	export let data;
	export let scope;
</script>

<main class="post">
	{@html data.content}
</main>

<footer>
	<time datetime={data.meta.datetime}>{data.meta.date.full}</time>

	{#each data.meta.tags as tag}
		<a class="text" href={`/tags/${tag}`}>#{tag}</a>
	{/each}
</footer>

<nav aria-label={t.label}>
	{#if data.prev}
		<a class="text" href={`/${scope}/${data.prev.slug}`}>← {data.prev.title}</a>
	{/if}

	{#if data.next}
		<a class="text" href={`/${scope}/${data.next.slug}`}>{data.next.title} →</a>
	{/if}
</nav>

<Support {scope} metadata={data.meta} />

<style>
	.post {
		margin-block-end: 1em;
	}

	nav,
	footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1em;
		font-size: var(--fs-smaller);
	}

	@media (min-width: 800px) {
		.post,
		nav,
		footer {
			inline-size: 75%;
			max-inline-size: 800px;
		}
	}
</style>

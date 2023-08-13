<script>
	export let data;
</script>

<main class="post">
	{@html data.content}
</main>

<footer class="footer">
	<time datetime={data.meta.datetime}>{data.meta.date.full}</time>

	{#each data.meta.tags as tag}
		<a class="text" href={`/tags/${tag}`}>#{tag}</a>
	{/each}
</footer>

<style>
	.post {
		margin-block-end: 1em;
	}

	.footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1em;
		font-size: var(--fs-smaller);
	}

	@media (min-width: 800px) {
		.post,
		.footer {
			inline-size: 75%;
			max-inline-size: 800px;
		}
	}
</style>

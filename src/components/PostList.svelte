<script>
	export let notes;
</script>

<ul class="posts">
	{#each notes as note}
		<li>
			<time class="date" datetime={note.datetime}>{note.date.short}</time>
			<span>
				<a href={`/blog/${note.slug}`}>{note.title}</a>{#if note.favorite}&nbsp;⭑{/if}
			</span>
		</li>
	{/each}
</ul>

<style>
	.posts {
		margin-inline: 0;
		padding-inline: 0;
	}

	.posts li {
		display: flex;
		gap: 0.5em;
	}

	.posts a {
		padding-block: 0.2em;
	}

	.date {
		flex-basis: 6.5ch;
		flex-grow: 0;
		flex-shrink: 0;

		color: var(--color-dimmed);
		text-align: end;
	}
</style>

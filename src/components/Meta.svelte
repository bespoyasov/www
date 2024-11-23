<script context="module">
	import { site } from '../lib/site';
</script>

<script>
	export let metadata;

	const { title, description, cover, slug } = metadata;
	const preview = !!cover && `${site.url}/images/notes/${slug}/${cover}`;
</script>

<svelte:head>
	<title>{title} • {site.title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if preview}<meta property="og:image" content={preview} />{/if}

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	{#if preview}
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={preview} />
	{:else}
		<meta name="twitter:card" content="summary" />
	{/if}
</svelte:head>

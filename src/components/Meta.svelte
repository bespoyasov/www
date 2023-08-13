<script context="module">
	import { site } from '../lib/site';
</script>

<script>
	export let metadata;
</script>

<svelte:head>
	<title>{metadata.title} • {site.title}</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

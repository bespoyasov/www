<script>
	export let src;
	export let caption;
</script>

<figure class="youtube">
	<iframe {src} title={caption} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />

	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

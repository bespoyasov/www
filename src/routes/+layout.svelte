<script>
	import '../styles/global.css';
</script>

<div class="layout">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.layout {
		margin: auto;
		padding-inline: 1.5rem;

		display: grid;
		grid-template-rows: auto 1fr auto;

		max-inline-size: 1100px;
		min-block-size: 100vh;
		min-block-size: 100dvh;
	}

	.content {
		min-inline-size: 0;
	}
</style>

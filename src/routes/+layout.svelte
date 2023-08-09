<script>
	import '../styles/global.css';

	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="layout">
	<Header />

	<div class="content">
		<slot />
	</div>

	<Footer />
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

<script>
	import Post from '../../../components/Post.svelte';
	import Meta from '../../../components/Meta.svelte';

	export let data;
</script>

<svelte:head>
	<script type="module" src="/scripts/code-sample-switch.js"></script>
</svelte:head>

<Meta metadata={data.meta} />
<Post {data} />

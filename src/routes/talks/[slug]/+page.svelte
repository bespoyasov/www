<script>
	import Meta from '../../../components/Meta.svelte';
	import Post from '../../../components/Post.svelte';

	export let data;
</script>

<Meta metadata={data.meta} />
<Post scope="talks" {data} />

<script context="module">
	import { locale } from '../lib/config';
	import { author } from '../lib/author';
	import { site } from '../lib/site';

	const t = {
		en: {
			title: 'Support author and subscribe to blog!',
			rss: 'Subscribe to RSS',
			twitter: 'Share post on Twitter',
			github: 'Star blog on GitHub',
			coffee: 'Buy a coffee'
		},
		ru: {
			title: 'Поддержать автора',
			rss: 'Подписаться на RSS',
			twitter: 'Поделиться в Твиттере',
			github: 'Звездануть на Гитхабе',
			coffee: 'Задонатить на кофе'
		}
	}[locale];
</script>

<script>
	export let metadata;

	const text = encodeURIComponent(metadata.title);
	const url = `${site.url}/${metadata.slug}`;
	const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
</script>

<aside class="share">
	<strong>{t.title}</strong>
	<menu>
		<a class="text" href="/rss">{t.rss}</a>
		<a class="text" href={shareUrl}>{t.twitter}</a>
		<a class="text" href={site.src}>{t.github}</a>
		<a class="text" href={author.support}>{t.coffee}</a>
	</menu>
</aside>

<style>
	.share {
		position: relative;
		margin-block: 2.5em;
		padding: 1em 1.5em;
		background-color: var(--color-support);
	}

	.share::after {
		content: '🖤';
		position: absolute;
		inset: 1em 1em auto auto;
	}

	.share menu {
		margin: 0;
		padding: 0;

		display: flex;
		flex-wrap: wrap;
		gap: 0 1em;
	}

	@media (min-width: 800px) {
		.share {
			inline-size: 75%;
			max-inline-size: 800px;
		}
	}
</style>

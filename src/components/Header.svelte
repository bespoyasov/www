<script context="module">
	import { locale } from '../lib/config';
	import { author } from '../lib/author';
	import { site } from '../lib/site';

	const t = {
		en: {
			projects: 'Projects',
			talks: 'Talks',
			blog: 'Blog',
			tags: 'Tags',
			alt: 'ru'
		},
		ru: {
			projects: 'Проекты',
			talks: 'Доклады',
			blog: 'Блог',
			tags: 'Теги',
			alt: 'en'
		}
	}[locale];
</script>

<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<header>
	<nav>
		<ul class="reset">
			<li><a aria-current={path === '/'} class="text author" href="/">{author.name}</a></li>
			<li><a aria-current={path.startsWith('/blog')} href="/blog">{t.blog}</a></li>
			<li><a aria-current={path.startsWith('/projects')} href="/projects">{t.projects}</a></li>
			<li><a aria-current={path.startsWith('/talks')} href="/talks">{t.talks}</a></li>
			<li><a aria-current={path.startsWith('/tags')} href="/tags">{t.tags}</a></li>
		</ul>
	</nav>

	<aside class="caps alternative">
		<a class="text" href={site.alt}>{t.alt}</a>
	</aside>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-content: baseline;

		padding-block: 2.5rem;
		line-height: 1;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}

	li:first-child {
		inline-size: 100%;
	}

	.author {
		font-weight: 700;
		text-decoration: none;
	}

	.alternative {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
		line-height: 1.5;
	}
</style>

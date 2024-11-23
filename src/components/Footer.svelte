<script context="module">
	import { locale } from '../lib/config';
	import { author } from '../lib/author';

	const t = {
		en: {
			title: 'Contacts',
			github: 'GitHub',
			linkedin: 'LinkedIn',
			employer: '0+X'
		},
		ru: {
			title: 'Контакты',
			github: 'Гитхаб',
			linkedin: 'Линкед',
			employer: '0+X'
		}
	}[locale];
</script>

<footer>
	<div>
		<h2 class="visually-hidden">{t.title}</h2>
		<ul class="reset">
			<li><a href={author.github}>{t.github}</a></li>
			<li><a href={author.linkedin}>{t.linkedin}</a></li>
			<li><a href={author.employer}>{t.employer}</a></li>
		</ul>
	</div>

	<div class="copyright">
		<a href="/license" class="text">© 2010+</a>
	</div>
</footer>

<style>
	footer {
		padding-block: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	ul {
		display: flex;
		gap: 0.5em;
	}

	.copyright {
		font-size: var(--fs-smaller);
	}
</style>

import { fetchPosts } from '../lib/fetch-posts';
import { fetchTags } from '../lib/fetch-tags';

import { locale } from '../lib/config';
import translations from './translations.json';

const MAX_NOTES = 5;
const MAX_TALKS = 3;
const MAX_TAGS = 10;

export async function load() {
	const t = translations[locale];

	const projects = fetchPosts({ kind: 'projects' }).filter((x) => x.featured);
	const notes = fetchPosts({ kind: 'notes' }).slice(0, MAX_NOTES);

	const talks = fetchPosts({ kind: 'talks' })
		.filter((talk) => talk.materials.includes('video') && talk.materials.includes('sources'))
		.slice(0, MAX_TALKS);

	const tags = Object.entries(fetchTags())
		.sort((a, b) => b[1] - a[1])
		.map(([tag]) => tag)
		.filter((tag) => tag !== 'favorite')
		.slice(0, MAX_TAGS);

	return { projects, notes, talks, tags, t };
}

import { fetchPosts } from '../../lib/fetch-posts';
import { decorateProjects } from '../../lib/decorate-projects';

import { locale } from '../../lib/config';
import translations from './translations.json';

export async function load() {
	const posts = fetchPosts({ kind: 'projects' });

	const prepare = (category) =>
		decorateProjects(posts.filter((item) => item.category === category));

	return {
		projects: prepare('live'),
		archived: prepare('archived'),
		misc: prepare('misc'),
		limb: prepare('limb'),
		t: translations[locale]
	};
}

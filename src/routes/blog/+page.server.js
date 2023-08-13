import { fetchPosts } from '../../lib/fetch-posts';
import { groupByYear } from '../../lib/group-by-year';

import { locale } from '../../lib/config';
import translations from './translations.json';

export async function load() {
	const t = translations[locale];
	const notes = groupByYear(fetchPosts({ kind: 'notes' }));

	return { t, notes };
}

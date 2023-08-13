import { fetchPosts } from '../../lib/fetch-posts';
import { locale } from '../../lib/config';
import translations from './translations.json';

export async function load() {
	const talks = fetchPosts({ kind: 'talks' });
	const t = translations[locale];
	return { t, talks };
}

import { fetchPosts } from '../../../lib/fetch-posts';
import { fetchSimilarTags } from '../../../lib/fetch-similar-tags';
import { decorateProjects } from '../../../lib/decorate-projects';
import { groupByYear } from '../../../lib/group-by-year';

import { locale } from '../../../lib/config';
import translations from './translations.json';

const interpolate = (str, data) => str.replace('$t', `#${data}`);

const injectTag = (t, tag) => {
	t = structuredClone(t);

	t.title = interpolate(t.title, tag);
	t.description = interpolate(t.description, tag);
	t.similar.about = interpolate(t.similar.about, tag);

	return t;
};

export async function load({ params }) {
	const { slug: tag } = params;
	const t = injectTag(translations[locale], tag);

	const allNotes = fetchPosts({ kind: 'notes' });
	const allTalks = fetchPosts({ kind: 'talks' });
	const allProjects = fetchPosts({ kind: 'projects' });
	const similarTags = fetchSimilarTags({ tag, limit: 15 });

	const talks = allTalks.filter(({ tags }) => tags.includes(tag));
	const notes = allNotes.filter(({ tags }) => tags.includes(tag));
	const projects = allProjects.filter(({ tags }) => tags.includes(tag));

	return {
		t,

		tag,
		similar: similarTags,

		projects: decorateProjects(projects),
		notes: groupByYear(notes),
		talks
	};
}

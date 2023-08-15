import { fetchTags } from '../../lib/fetch-tags';
import { groupByName } from '../../lib/group-by-name';
import { groupByFrequency } from '../../lib/group-by-frequency';

import { locale } from '../../lib/config';
import translations from './translations.json';

export async function load() {
	const tags = fetchTags();

	return {
		tagsByName: groupByName(tags),
		tagsByFrequency: groupByFrequency(tags),
		t: translations[locale]
	};
}

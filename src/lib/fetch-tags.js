import { loaders } from './meta';

export function fetchTags() {
	const tags = Object.values(loaders)
		.map((load) => Object.values(load()))
		.flat()
		.map((file) => file.metadata.tags)
		.flat()
		.filter(Boolean)
		.reduce((acc, tag) => {
			acc[tag] ??= 0;
			acc[tag] += 1;
			return acc;
		}, {});

	return tags;
}

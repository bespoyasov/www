import { loaders } from './meta';

export function fetchSimilarTags({ tag, limit }) {
	const similarTags = Object.values(loaders)
		.map((load) => Object.values(load()))
		.flat()
		.map((file) => file.metadata.tags ?? [])
		.filter((tags) => tags.includes(tag))
		.flat()
		.filter((t) => t !== tag);

	const tagsByCount = similarTags.reduce((acc, tag) => {
		acc[tag] ??= 0;
		acc[tag] += 1;
		return acc;
	}, {});

	return Object.entries(tagsByCount)
		.sort((a, b) => b[1] - a[1])
		.map(([tag]) => tag)
		.slice(0, limit);
}

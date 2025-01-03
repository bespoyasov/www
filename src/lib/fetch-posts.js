import { loaders } from './meta';
import { format, short } from './datetime';

export function fetchPosts({ kind }) {
	const loader = loaders[kind];
	const modules = loader();

	return Object.entries(modules)
		.filter(([, file]) => !!file.metadata)
		.map(([path, file]) => {
			const meta = file.metadata;
			const slug = path.split('/').at(-2);
			const favorite = meta.tags?.includes('favorite');

			const date = {
				short: short(meta.datetime),
				full: format(meta.datetime)
			};

			meta.tags ??= [];
			meta.materials ??= [];

			return { ...meta, favorite, slug, date };
		})
		.toSorted((a, b) => Date.parse(b.datetime) - Date.parse(a.datetime))
		.toSorted((a, b) => (a.pinned ? -1 : b.pinned ? 1 : 0));
}

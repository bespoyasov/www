import { fetchPosts } from '../../../lib/fetch-posts';
import { fetchContent } from '../../../lib/fetch-content';

export async function load({ params }) {
	const kind = 'talks';
	const slug = params.slug;

	const postList = fetchPosts({ kind });
	const postContent = await fetchContent({ kind, slug });

	const current = postList.findIndex((post) => post.slug === slug);
	const prev = postList[current + 1] ?? null;
	const next = postList[current - 1] ?? null;

	const meta = postList[current];
	const content = postContent.html;
	return { meta, prev, next, content };
}

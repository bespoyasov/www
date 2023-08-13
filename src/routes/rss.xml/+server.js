import { fetchPosts } from '../../lib/fetch-posts';
import { fetchContent } from '../../lib/fetch-content';
import { feedTemplate } from './templates';

const headers = {
	'Cache-Control': 'max-age=0, s-maxage=3600',
	'Content-Type': 'application/xml'
};

export async function GET() {
	const kind = 'notes';
	const posts = await Promise.all(
		fetchPosts({ kind }).map(async (metadata) => {
			const { html: content } = await fetchContent({ kind, slug: metadata.slug });
			return { metadata, content };
		})
	);

	const feed = feedTemplate({ posts });
	return new Response(feed, { headers });
}

export const prerender = true;
export const trailingSlash = 'never';

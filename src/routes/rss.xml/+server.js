import { feedTemplate } from './templates';

const headers = {
	'Cache-Control': 'max-age=0, s-maxage=3600',
	'Content-Type': 'application/xml'
};

export async function GET() {
	const posts = [];
	const feed = feedTemplate({ posts });
	return new Response(feed, { headers });
}

export const prerender = true;
export const trailingSlash = 'never';

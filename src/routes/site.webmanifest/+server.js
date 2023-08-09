import { locale } from '../../lib/config';
import { site } from '../../lib/site';

const manifest = {
	dir: 'ltr',
	lang: locale,

	name: site.title,
	description: site.about,
	short: site.short,

	categories: ['books', 'business', 'education', 'personalization', 'productivity'],

	theme_color: '#ffffff',
	background_color: '#ffffff',

	icons: [
		{
			src: '/favicon-192x192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			src: '/favicon-512x512.png',
			sizes: '512x512',
			type: 'image/png'
		}
	]
};

export async function GET() {
	return new Response(JSON.stringify(manifest));
}

export const prerender = true;
export const trailingSlash = 'never';

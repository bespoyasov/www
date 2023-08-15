import { redirect } from '@sveltejs/kit';
import { fetchContent } from '../../../lib/fetch-content';

export async function load({ params }) {
	const { slug } = params;
	const { meta } = await fetchContent({ kind: 'projects', slug });

	throw redirect(303, meta.redirect);
}

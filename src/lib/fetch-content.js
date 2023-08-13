import { locale } from './config';

export async function fetchContent({ kind, slug }) {
	const module = await import(`../../storage/${kind}/${slug}/${locale}.md`);
	const { metadata, default: content } = module;
	const { html } = content.render();

	return {
		meta: metadata,
		html
	};
}

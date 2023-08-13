import { locale } from './config';

export async function fetchContent({ kind, slug }) {
	const module = await import(`../../storage/${kind}/${slug}/${locale}.md`);
	const { metadata, default: content } = module;
	const { html, css } = content.render();

	const overridden = html
		.replaceAll('src="./', `src="/images/${kind}/${slug}/`)
		.concat(`<style>${css.code}</style>`);

	return {
		meta: metadata,
		html: overridden
	};
}

import adapter from '@sveltejs/adapter-static';

import { mdsvex } from 'mdsvex';
import unwrapImages from 'remark-unwrap-images';
import linkHeadings from 'rehype-autolink-headings';
import slugify from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [unwrapImages],
			rehypePlugins: [slugify, [linkHeadings, { behavior: 'append' }]]
		})
	]
};

export default config;

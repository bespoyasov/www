export function autoImport(components) {
	const asUsage = (tag) => `<${tag}`;
	const asImport = (tag) => `import ${tag} from "$components/${tag}.svelte";`;

	return {
		async markup({ content, filename }) {
			if (!filename.endsWith('.md')) return { code: content };

			const missing = components.filter((tag) => content.includes(asUsage(tag)));
			if (!missing.length) return { code: content };

			const imports = missing.map(asImport).join('\n');
			const processed = `${content}\n\n<script>${imports}</script>`;
			return { code: processed };
		}
	};
}

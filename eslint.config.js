import js from '@eslint/js';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
	...svelte.configs['flat/recommended'],
	{
		...js.configs.recommended,
		files: ['src/**/*', 'ops/**/*', 'tests/**/*', 'static/scripts/**/*'],
		plugins: { prettier },
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2022
			}
		}
	}
];

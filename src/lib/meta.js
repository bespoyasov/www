import { locale } from './config';

// Paths and options must be literals.
export const loaders = {
	en: {
		notes: () => import.meta.glob('/storage/notes/**/en.md', { eager: true }),
		talks: () => import.meta.glob('/storage/talks/**/en.md', { eager: true }),
		projects: () => import.meta.glob('/storage/projects/**/en.md', { eager: true })
	},
	ru: {
		notes: () => import.meta.glob('/storage/notes/**/ru.md', { eager: true }),
		talks: () => import.meta.glob('/storage/talks/**/ru.md', { eager: true }),
		projects: () => import.meta.glob('/storage/projects/**/ru.md', { eager: true })
	}
}[locale];

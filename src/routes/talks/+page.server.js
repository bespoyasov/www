import { locale } from '../../lib/config';
import translations from './translations.json';

export async function load() {
	const t = translations[locale];
	return { t };
}

import { locale } from '../../lib/config';
import translations from './translations.json';

export async function load() {
	return {
		t: translations[locale]
	};
}

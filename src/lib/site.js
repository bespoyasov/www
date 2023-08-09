import { locale } from './config';

export const site = {
	en: {
		title: 'Alex Bespoyasov',
		about: 'Blog about web development and software design.',
		short: 'AB',

		url: 'https://bespoyasov.me',
		alt: 'https://bespoyasov.ru',
		src: 'https://github.com/bespoyasov/www'
	},
	ru: {
		title: 'Блог Саши Беспоясова',
		about: 'Блог о веб-разработке и проектировании приложений.',
		short: 'АБ',

		url: 'https://bespoyasov.ru',
		alt: 'https://bespoyasov.me',
		src: 'https://github.com/bespoyasov/www'
	}
}[locale];

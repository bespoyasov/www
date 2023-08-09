import { locale } from './lib/config';

export const handle = async ({ event, resolve }) => {
	return await resolve(event, {
		transformPageChunk({ html }) {
			return html.replace(/<html lang="en">/, `<html lang="${locale}">`);
		}
	});
};

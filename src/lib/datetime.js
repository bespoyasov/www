import { locale } from './config';

export const format = (datetime, config) =>
	new Intl.DateTimeFormat(locale, config).format(new Date(datetime));

export const short = (datetime) => format(datetime, { day: '2-digit', month: '2-digit' });
